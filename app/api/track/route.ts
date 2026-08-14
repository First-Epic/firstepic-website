import { NextResponse } from 'next/server'
import { CLIENTS, POSITIONS, CANDIDATE_DISPLAY, HUBS } from '../../c/_registry'
import { COOKIE_VISITOR } from '../../../lib/tracking'
import type { TrackEvent } from '../../../lib/tracking'

// GRANULAR CLICK-STREAM endpoint (Part C). NEW + ADDITIVE: the existing
// /api/visit page-view beacon is untouched and keeps working. This endpoint
// receives the richer interaction stream (dwell, section-in-view, deck/lightbox
// opens, video plays, dashboard tile clicks) plus the layered identity block,
// enriches with server-side IP/UA, and forwards to the Estelle webhook. Estelle
// (Part D) stores these and decides whether to EMAIL Davis; no notification
// logic lives here.
//
// Everything is BEST-EFFORT: this endpoint never blocks the client's view, and
// a webhook failure never surfaces to the user (the tracker fires-and-forgets
// and ignores the response). Owner-exclusion (Davis) is preserved via the same
// fe_owner mechanism as /api/visit.

const OWNER_IPS = (process.env.FE_OWNER_IPS || '').split(',').map(s => s.trim()).filter(Boolean)
// A dedicated track webhook if provided, else reuse the visit webhook host with
// a /page-event path, else fall back to the visit webhook itself.
const WEBHOOK =
  process.env.FE_TRACK_WEBHOOK_URL ||
  process.env.FE_VISIT_WEBHOOK_URL ||
  'https://estelle.firstepic.studio/webhooks/page-event'
const SECRET = process.env.FE_VISIT_SECRET || ''

// How many events we accept in a single batched POST (defensive bound).
const MAX_EVENTS = 40

function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for') || ''
  return (xff.split(',')[0] || req.headers.get('x-real-ip') || '').trim()
}

// Is `token` a real candidate token OR a real position (dashboard) token? We
// only forward events for surfaces we recognize, mirroring /api/visit's
// unknown-token guard.
function knownToken(token: string): boolean {
  return Boolean(CLIENTS[token]) || Boolean(POSITIONS[token]) || Boolean(HUBS[token])
}

// Accepts either a single event or a batch. Kept permissive: bad shapes are
// dropped silently rather than erroring (never break the page).
export async function POST(request: Request) {
  let body: unknown = null
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: true, skipped: 'bad-json' })
  }

  const rawEvents: unknown[] = Array.isArray((body as { events?: unknown[] })?.events)
    ? ((body as { events: unknown[] }).events)
    : Array.isArray(body)
      ? (body as unknown[])
      : body
        ? [body]
        : []

  if (rawEvents.length === 0) return NextResponse.json({ ok: true, skipped: 'empty' })

  const ip = clientIp(request)
  const ua = request.headers.get('user-agent') || ''
  const cookies = request.headers.get('cookie') || ''
  const referrer = request.headers.get('referer') || ''

  const ownerByIp = OWNER_IPS.includes(ip)
  const ownerByCookie = /(?:^|; )fe_owner=1/.test(cookies)

  // OWNER EXCLUSION (Davis): drop the events but still 200. If the owner is
  // recognized by IP, pin the durable fe_owner cookie so future visits from any
  // network are excluded too (same behavior as /api/visit).
  if (ownerByIp || ownerByCookie) {
    const res = NextResponse.json({ ok: true, skipped: 'owner' })
    if (ownerByIp) {
      res.cookies.set('fe_owner', '1', {
        httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365,
      })
    }
    return res
  }

  // Ensure a durable first-party visitor id (Tier 2). If the client didn't send
  // one (cookie absent on first ever visit), mint one server-side and set it so
  // subsequent visits carry the same-device signal. Long-lived (1 year).
  const existingVisitor = (cookies.match(/(?:^|; )fe_visitor=([^;]+)/) || [])[1] || ''
  const visitorId = existingVisitor || cryptoRandomId()

  // Normalize + enrich each event server-side. We trust the client identity
  // block for the fields it can know (viewerId/name/email/source/confidence)
  // but always stamp the authoritative server-side visitor id, IP and UA.
  const enriched = (rawEvents as TrackEvent[])
    .slice(0, MAX_EVENTS)
    .filter(e => e && typeof e === 'object' && typeof e.type === 'string' && knownToken(String(e.token || '')))
    .map(e => {
      const identity = (e.identity && typeof e.identity === 'object') ? e.identity : ({} as TrackEvent['identity'])
      // Resolve the candidate NAME from the token so notifications say "Raees S."
      // not "None". Prefer the display name, then codename; fall back to the CLIENTS
      // label's codename prefix (before " (") for a candidate not in CANDIDATE_DISPLAY.
      const tok = String(e.token || '')
      const cd = CANDIDATE_DISPLAY[tok]
      const candidate =
        cd?.name || cd?.codename || (CLIENTS[tok]?.name || '').split(' (')[0] || null
      // Human PAGE label so START/summary emails read for EVERY surface, not just
      // candidate pages: a candidate -> "Carina-03 — Afham K."; a position
      // dashboard -> "the AI Video Team Lead shortlist"; the hub -> "<client> portal".
      const posMeta = POSITIONS[tok]
      const hubMeta = HUBS[tok]
      const pageLabel =
        cd ? `${cd.codename} — ${cd.name}`
        : posMeta ? `the ${posMeta.position} shortlist`
        : hubMeta ? `${hubMeta.clientName} — portal`
        : (candidate || CLIENTS[tok]?.name || null)
      return {
        ...e,
        candidate,                      // resolved candidate label for notifications
        pageLabel,                      // human label for the page/surface (all types)
        identity: {
          ...identity,
          fe_visitor: visitorId,        // authoritative server-side id
          // If the client only had cookie/ip signal but we also have an IP, keep
          // its declared source; we never UPGRADE confidence here.
        },
        server: { ip, ua, referrer },   // server-side enrichment (Tier 3 signal)
        received: Date.now(),
      }
    })

  if (enriched.length && SECRET) {
    try {
      const ctrl = new AbortController()
      const t = setTimeout(() => ctrl.abort(), 6000)
      await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-estelle-secret': SECRET },
        body: JSON.stringify({ kind: 'page-event', events: enriched }),
        signal: ctrl.signal,
      })
      clearTimeout(t)
    } catch {
      /* best-effort; never break the page */
    }
  }

  const res = NextResponse.json({ ok: true, count: enriched.length })
  // (Re)set the durable visitor cookie so it persists / refreshes its TTL.
  res.cookies.set(COOKIE_VISITOR, visitorId, {
    httpOnly: false,               // client tracker reads this to build the identity block
    sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365,
  })
  return res
}

// A URL-safe random id without pulling in Node crypto types (works on the
// Node.js runtime; falls back to Math.random if unavailable).
function cryptoRandomId(): string {
  try {
    // globalThis.crypto is available on the Node.js runtime used by route handlers.
    const g = globalThis as unknown as { crypto?: { randomUUID?: () => string } }
    if (g.crypto?.randomUUID) return g.crypto.randomUUID().replace(/-/g, '')
  } catch { /* fall through */ }
  return (
    Date.now().toString(36) +
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 10)
  )
}
