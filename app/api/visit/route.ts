import { NextResponse } from 'next/server'
import { CLIENTS } from '../../c/_registry'

const OWNER_IPS = (process.env.FE_OWNER_IPS || '').split(',').map(s => s.trim()).filter(Boolean)
const WEBHOOK = process.env.FE_VISIT_WEBHOOK_URL || 'https://estelle.firstepic.studio/webhooks/page-visit'
const SECRET = process.env.FE_VISIT_SECRET || ''

function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for') || ''
  return (xff.split(',')[0] || req.headers.get('x-real-ip') || '').trim()
}

// Called by the gated client page. Records the visit (via the Estelle webhook) UNLESS
// it's the owner (Davis reviewing) or a refresh within the hour. Owner = matching IP
// OR the durable fe_owner cookie (survives IP changes / other networks once set).
export async function POST(request: Request) {
  let token = ''
  try { token = String(((await request.json()) || {}).token || '') } catch {}
  const meta = CLIENTS[token]
  if (!meta) return NextResponse.json({ ok: true, skipped: 'unknown-token' })

  const ip = clientIp(request)
  const cookies = request.headers.get('cookie') || ''
  const ownerByIp = OWNER_IPS.includes(ip)
  const ownerByCookie = /(?:^|; )fe_owner=1/.test(cookies)

  if (ownerByIp || ownerByCookie) {
    const res = NextResponse.json({ ok: true, skipped: 'owner' })
    if (ownerByIp) {
      // pin the owner cookie so future visits are excluded even if the IP changes
      res.cookies.set('fe_owner', '1', { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365 })
    }
    return res
  }

  // NO visit throttle (Davis 2026-08-05): notify on EVERY page open, repeats included —
  // the fe_pinged 1h cookie used to collapse re-opens into silence. Owner exclusion
  // above still applies (Davis's own visits never notify).

  if (SECRET) {
    try {
      const ctrl = new AbortController()
      const t = setTimeout(() => ctrl.abort(), 6000)
      await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-estelle-secret': SECRET },
        body: JSON.stringify({ token, client: meta.name, ip, referrer: request.headers.get('referer') || '' }),
        signal: ctrl.signal,
      })
      clearTimeout(t)
    } catch { /* best-effort; never break the page */ }
  }

  return NextResponse.json({ ok: true, logged: true })
}
