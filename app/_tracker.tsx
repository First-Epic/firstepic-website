'use client'

import { useEffect } from 'react'
import {
  COOKIE_VISITOR,
  COOKIE_VIEWER,
  COOKIE_IDENTITY,
} from '../lib/tracking'
import type {
  TrackEvent,
  TrackEventType,
  IdentityBlock,
  IdentitySource,
  IdentityConfidence,
} from '../lib/tracking'

// CLICK-STREAM TRACKER (Part C). Mounts on the gated candidate pages (/c/<token>)
// and the client dashboard (/p/<clientToken>). Everything here is BEST-EFFORT and
// FIRE-AND-FORGET: every observer, listener and flush is wrapped so a thrown
// tracker can NEVER surface to the user or block their view of the page. If the
// browser lacks an API (IntersectionObserver, sendBeacon), that capability is
// simply skipped.
//
// What it captures:
//   - page_view on mount
//   - dwell: accumulated VISIBLE time on page, flushed on visibility-hidden,
//     pagehide, beforeunload (via navigator.sendBeacon so it survives navigation)
//     and on a periodic heartbeat.
//   - section_view: IntersectionObserver over the page's major <section id="sec-*">
//     elements (and any [data-section]); reports which sections were actually
//     reached (did they get to the workflow challenge / the portfolio).
//   - clicks on meaningful targets via a single delegated listener:
//     deck opens (.deck-trigger), lightbox/portfolio opens (.lb-trigger),
//     folder opens (.folder-tile), and dashboard tile clicks ([data-track="tile"]).
//   - video_play / video_complete on any <video> (inline or in a lightbox).
//
// Identity (layered resolver, best-signal-wins) is computed per flush so a
// mid-session self-identify is reflected on later events.

type Surface = 'candidate' | 'dashboard'

function readCookie(name: string): string {
  try {
    const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]+)'))
    return m ? decodeURIComponent(m[1]) : ''
  } catch {
    return ''
  }
}

// Ensure a durable first-party visitor id exists client-side (Tier 2). The
// server also (re)sets this cookie, but we set it here immediately so the very
// first event of a brand-new visitor already carries a stable id.
function ensureVisitorId(): string {
  let id = readCookie(COOKIE_VISITOR)
  if (!id) {
    try {
      const g = window as unknown as { crypto?: { randomUUID?: () => string } }
      id = g.crypto?.randomUUID
        ? g.crypto.randomUUID().replace(/-/g, '')
        : Date.now().toString(36) + Math.random().toString(36).slice(2, 12)
      // 1 year; readable (not httpOnly) because the tracker itself reads it.
      document.cookie = `${COOKIE_VISITOR}=${encodeURIComponent(id)}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
    } catch {
      id = 'anon-' + Math.random().toString(36).slice(2, 12)
    }
  }
  return id
}

// LAYERED IDENTITY RESOLVER. Best signal wins, most-trusted first. Never asserts
// an identity we don't have; degrades gracefully to cookie-only.
function resolveIdentity(): IdentityBlock {
  const fe_visitor = ensureVisitorId()

  // Tier 1b: self-identified name/email (stored as JSON in fe_identity cookie).
  let selfName = ''
  let selfEmail = ''
  try {
    const raw = readCookie(COOKIE_IDENTITY)
    if (raw) {
      const parsed = JSON.parse(raw) as { name?: string; email?: string }
      selfName = (parsed?.name || '').trim()
      selfEmail = (parsed?.email || '').trim()
    }
  } catch { /* ignore malformed */ }

  // Tier 1a: per-viewer id from a deep-link.
  const viewerId = readCookie(COOKIE_VIEWER)

  let source: IdentitySource = 'cookie'
  let confidence: IdentityConfidence = 'medium'

  if (viewerId) {
    // A deep-link named this viewer: deterministic, high confidence.
    source = 'link'
    confidence = 'high'
  } else if (selfName || selfEmail) {
    // They told us who they are: deterministic, high confidence.
    source = 'self'
    confidence = 'high'
  } else {
    // Only the durable device cookie: same-device signal, not a name.
    source = 'cookie'
    confidence = 'medium'
  }
  // (Tier 3 'ip'/low is resolved SERVER-SIDE only, never here - the client
  //  cannot see its own IP and we never NAME a person from IP.)

  const identity: IdentityBlock = { fe_visitor, source, confidence }
  // RECONCILE: always include both the durable fe_visitor id AND any identity we
  // have, so the server can stitch a device's history retroactively once it later
  // self-identifies (or arrives via a named link).
  if (viewerId) identity.viewerId = viewerId
  if (selfName) identity.name = selfName
  if (selfEmail) identity.email = selfEmail
  return identity
}

export default function Tracker({
  token,
  surface,
  clientToken,
}: {
  token: string
  surface: Surface
  clientToken?: string
}) {
  useEffect(() => {
    // The whole setup is guarded: any failure leaves the page fully usable.
    let cleanup = () => {}
    try {
      cleanup = start({ token, surface, clientToken })
    } catch {
      /* tracker must never break the page */
    }
    return () => {
      try { cleanup() } catch { /* ignore */ }
    }
  }, [token, surface, clientToken])

  return null
}

function start({
  token,
  surface,
  clientToken,
}: {
  token: string
  surface: Surface
  clientToken?: string
}): () => void {
  const referrer = (() => { try { return document.referrer || '' } catch { return '' } })()

  // ----- session state -----
  const sectionsSeen = new Set<string>()
  let maxScrollPct = 0
  let dwellMs = 0
  let visibleSince = document.visibilityState === 'visible' ? Date.now() : 0
  let flushedFinal = false

  // ----- outbound queue (batched) -----
  let queue: TrackEvent[] = []
  let batchTimer: ReturnType<typeof setTimeout> | null = null

  function baseEvent(type: TrackEventType, detail?: TrackEvent['detail']): TrackEvent {
    return {
      type,
      token,
      clientToken,
      surface,
      identity: resolveIdentity(),
      ts: Date.now(),
      referrer,
      detail,
    }
  }

  // Send via fetch (keepalive) for normal batches; sendBeacon for unload.
  function post(events: TrackEvent[], useBeacon: boolean): void {
    if (!events.length) return
    const payload = JSON.stringify({ events })
    try {
      if (useBeacon && typeof navigator !== 'undefined' && navigator.sendBeacon) {
        const blob = new Blob([payload], { type: 'application/json' })
        navigator.sendBeacon('/api/track', blob)
        return
      }
    } catch { /* fall through to fetch */ }
    try {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true, // let it complete even if the page is going away
      }).catch(() => {})
    } catch { /* swallow */ }
  }

  function flushQueue(useBeacon = false): void {
    if (batchTimer) { clearTimeout(batchTimer); batchTimer = null }
    if (!queue.length) return
    const batch = queue
    queue = []
    post(batch, useBeacon)
  }

  function enqueue(ev: TrackEvent): void {
    queue.push(ev)
    // Debounce a batch flush so rapid interactions coalesce.
    if (!batchTimer) {
      batchTimer = setTimeout(() => { try { flushQueue(false) } catch { /* ignore */ } }, 1500)
    }
    // Guard against an unbounded queue if flushes keep failing.
    if (queue.length >= 20) flushQueue(false)
  }

  function emit(type: TrackEventType, detail?: TrackEvent['detail']): void {
    try { enqueue(baseEvent(type, detail)) } catch { /* never break the page */ }
  }

  // ----- dwell accounting -----
  function accrueVisible(): void {
    if (visibleSince) {
      dwellMs += Date.now() - visibleSince
      visibleSince = 0
    }
  }
  // Emit a dwell snapshot. On unload we send via beacon and include the final flag.
  function emitDwell(final: boolean): void {
    accrueVisible()
    const ev = baseEvent('dwell', {
      dwellMs,
      maxScrollPct: Math.round(maxScrollPct),
      sectionsSeen: Array.from(sectionsSeen),
    })
    if (final) {
      if (flushedFinal) return
      flushedFinal = true
      // Send the dwell event together with anything queued, via beacon.
      queue.push(ev)
      flushQueue(true)
    } else {
      // Restart the visible clock for continued accumulation.
      visibleSince = document.visibilityState === 'visible' ? Date.now() : 0
      enqueue(ev)
    }
  }

  // ----- scroll depth -----
  function onScroll(): void {
    try {
      const doc = document.documentElement
      const scrollable = (doc.scrollHeight - doc.clientHeight) || 1
      const pct = ((doc.scrollTop || window.scrollY || 0) + doc.clientHeight) / (doc.scrollHeight || 1) * 100
      if (pct > maxScrollPct) maxScrollPct = Math.min(100, pct)
      // keep `scrollable` referenced without side effects
      void scrollable
    } catch { /* ignore */ }
  }

  // ----- section-in-view (IntersectionObserver) -----
  let io: IntersectionObserver | null = null
  try {
    if (typeof IntersectionObserver !== 'undefined') {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>('section[id^="sec-"], [data-section]'),
      )
      if (targets.length) {
        io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue
              const el = entry.target as HTMLElement
              const id = el.getAttribute('data-section') || el.id
              if (id && !sectionsSeen.has(id)) {
                sectionsSeen.add(id)
                emit('section_view', { section: id })
              }
            }
          },
          { threshold: 0.4 }, // count a section as "reached" once ~40% is on screen
        )
        targets.forEach((t) => { try { io!.observe(t) } catch { /* ignore */ } })
      }
    }
  } catch { io = null }

  // ----- delegated clicks on meaningful targets -----
  function onClick(e: MouseEvent): void {
    try {
      const start = e.target as Element | null
      if (!start) return
      const el = start.closest?.(
        '.deck-trigger, .lb-trigger, .folder-tile, [data-track]',
      ) as HTMLElement | null
      if (!el) return

      // Explicit data-track wins (dashboard tiles, or anything we tag later).
      const tag = el.getAttribute('data-track')
      if (tag === 'tile') {
        emit('tile_click', {
          label: el.getAttribute('data-track-label') || '',
          candidateToken: el.getAttribute('data-track-token') || '',
        })
        return
      }

      if (el.classList.contains('deck-trigger')) {
        emit('deck_open', { label: el.getAttribute('data-deck-label') || '' })
        return
      }
      if (el.classList.contains('folder-tile')) {
        emit('folder_open', { label: 'Additional Deliverables' })
        return
      }
      if (el.classList.contains('lb-trigger')) {
        // A portfolio piece opening is a lightbox open inside the portfolio
        // section; distinguish it so Estelle sees genuine portfolio interest.
        const inPortfolio = Boolean(el.closest('#sec-portfolio'))
        emit(inPortfolio ? 'portfolio_open' : 'lightbox_open', {
          label: el.getAttribute('data-lb-title') || '',
          src: el.getAttribute('data-lb-src') || '',
        })
        return
      }
    } catch { /* never break the page */ }
  }

  // ----- video play / play-to-end -----
  const videoCleanups: Array<() => void> = []
  try {
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video'))
    // Media IDENTITY resolver (2026-08-05): the generated pages label every portfolio
    // video with the same generic aria-label ('video'), so notifications read
    // "started 'a video'" with no way to tell WHICH one. Resolve a human title,
    // best-signal-first; runs on pages ALREADY deployed (the real titles live in the
    // sibling caption div next to each media box).
    const videoTitle = (v: HTMLVideoElement): string => {
      try {
        // 1. explicit data attribute (future generated pages)
        const dt = v.getAttribute('data-media-title')
        if (dt && dt.trim()) return dt.trim()
        // 2. the card's caption title: walk up a few ancestors and take the first
        //    .accent-gradient text that isn't empty (the visible video title).
        let el: HTMLElement | null = v.parentElement
        for (let hops = 0; el && hops < 4; hops++, el = el.parentElement) {
          const cap = el.parentElement?.querySelector('.accent-gradient')
            || el.querySelector('.accent-gradient')
          const t = cap?.textContent?.trim()
          if (t) return t
        }
        // 3. aria-label, but only when it is NOT the generic placeholder
        const al = (v.getAttribute('aria-label') || '').trim()
        if (al && !/^(video)$/i.test(al)) {
          return /^walkthrough$/i.test(al) ? 'Screen-record walkthrough' : al
        }
        // 4. the file name from the source URL
        const srcU = v.querySelector('source')?.getAttribute('src') || v.currentSrc || ''
        const base = srcU.split('?')[0].split('/').pop()
        if (base) return base
        return al || 'video'
      } catch { return v.getAttribute('aria-label') || 'video' }
    }
    videos.forEach((v) => {
      let playedEmitted = false
      let completeEmitted = false
      const label = videoTitle(v)
      const srcAttr = v.querySelector('source')?.getAttribute('src') || ''
      // EVERY watch notifies (Davis 2026-08-05): the latches are PER-WATCH, not
      // per-page-load. A completed watch resets both, so a re-watch emits a fresh
      // start + finish; a play from ~the beginning also counts as a new start even
      // without a completion (the viewer scrubbed back and restarted). Pause/resume
      // mid-video stays silent (one start per watch-through, never resume spam).
      const onPlay = () => {
        if (playedEmitted && v.currentTime > 3) return   // resume, not a new watch
        playedEmitted = true
        completeEmitted = false
        emit('video_play', { label, src: v.currentSrc || srcAttr })
      }
      const onTime = () => {
        if (completeEmitted || !v.duration || !isFinite(v.duration)) return
        // "played to end" ~ within the last 2% (or last 1.5s) of the video.
        if (v.currentTime >= v.duration - Math.max(1.5, v.duration * 0.02)) {
          completeEmitted = true
          playedEmitted = false      // next play is a NEW watch -> notifies again
          emit('video_complete', {
            label,
            src: v.currentSrc || srcAttr,
            videoPct: Math.round((v.currentTime / v.duration) * 100),
          })
        }
      }
      const onEnded = () => {
        if (completeEmitted) { playedEmitted = false; return }
        completeEmitted = true
        playedEmitted = false        // next play is a NEW watch -> notifies again
        emit('video_complete', { label, src: v.currentSrc || srcAttr, videoPct: 100 })
      }
      v.addEventListener('play', onPlay)
      v.addEventListener('timeupdate', onTime)
      v.addEventListener('ended', onEnded)
      videoCleanups.push(() => {
        v.removeEventListener('play', onPlay)
        v.removeEventListener('timeupdate', onTime)
        v.removeEventListener('ended', onEnded)
      })
    })
  } catch { /* ignore */ }

  // ----- lifecycle / flush hooks -----
  function onVisibility(): void {
    if (document.visibilityState === 'hidden') {
      // Tab hidden or navigating away: flush dwell (beacon-safe on unload path,
      // but here we can still use fetch/keepalive; use beacon to be safe).
      emitDwell(true)
    } else {
      // Became visible again: restart the visible clock.
      visibleSince = Date.now()
      flushedFinal = false
    }
  }
  function onPageHide(): void { emitDwell(true) }
  function onBeforeUnload(): void { emitDwell(true) }

  // Periodic heartbeat so long-dwell sessions report even without navigation.
  const heartbeat = setInterval(() => {
    try { if (document.visibilityState === 'visible') emitDwell(false) } catch { /* ignore */ }
  }, 30000)

  // ----- wire up -----
  document.addEventListener('click', onClick, true)
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('visibilitychange', onVisibility)
  window.addEventListener('pagehide', onPageHide)
  window.addEventListener('beforeunload', onBeforeUnload)

  // Fire the initial page_view immediately (resolves identity on the way).
  emit('page_view')
  onScroll() // capture initial scroll position

  // ----- teardown -----
  return () => {
    try { clearInterval(heartbeat) } catch { /* ignore */ }
    try { io?.disconnect() } catch { /* ignore */ }
    try { document.removeEventListener('click', onClick, true) } catch { /* ignore */ }
    try { window.removeEventListener('scroll', onScroll) } catch { /* ignore */ }
    try { document.removeEventListener('visibilitychange', onVisibility) } catch { /* ignore */ }
    try { window.removeEventListener('pagehide', onPageHide) } catch { /* ignore */ }
    try { window.removeEventListener('beforeunload', onBeforeUnload) } catch { /* ignore */ }
    videoCleanups.forEach((c) => { try { c() } catch { /* ignore */ } })
    // Flush any remaining dwell + queued events on unmount (SPA navigation).
    try { emitDwell(true) } catch { /* ignore */ }
  }
}
