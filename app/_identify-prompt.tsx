'use client'

import { useEffect, useState } from 'react'
import { COOKIE_IDENTITY, COOKIE_VISITOR, COOKIE_VIEWER } from '../lib/tracking'
import type { TrackEvent } from '../lib/tracking'

// OPTIONAL self-identification prompt (Tier-1b identity, Part C).
//
// IMPORTANT: the visitor is ALREADY authenticated by the cookie gate. This
// prompt is for ATTRIBUTION ONLY - it must NEVER block or gate viewing. It is a
// small, dismissable card in the corner, shown at most once per device, and the
// page is fully usable whether they fill it in, dismiss it, or ignore it.
//
// On submit (or dismiss) we set a cookie so it never shows again:
//   - fe_identity = JSON {name?, email?}  (the tracker reads this for identity)
//   - fe_identity_seen = 1                (suppresses the prompt henceforth)
// Both are best-effort; a failure here leaves the page completely unaffected.

const SEEN_COOKIE = 'fe_identity_seen'

function hasCookie(name: string): boolean {
  try {
    return new RegExp('(?:^|; )' + name + '=').test(document.cookie)
  } catch {
    return false
  }
}

function setCookie(name: string, value: string, maxAge: number): void {
  try {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`
  } catch {
    /* ignore - never break the page */
  }
}

function readCookie(name: string): string {
  try {
    const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]+)'))
    return m ? decodeURIComponent(m[1]) : ''
  } catch {
    return ''
  }
}

export default function IdentifyPrompt({
  token,
  surface,
  clientToken,
  clientName,
}: {
  token: string
  surface: 'candidate' | 'dashboard'
  clientToken?: string
  clientName?: string
}) {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    try {
      // Only ever show if we haven't seen it AND they haven't already identified.
      if (!hasCookie(SEEN_COOKIE) && !hasCookie(COOKIE_IDENTITY)) {
        // A short delay so it doesn't fight the page's first paint / feel pushy.
        const t = setTimeout(() => setVisible(true), 2500)
        return () => clearTimeout(t)
      }
    } catch {
      /* ignore */
    }
  }, [])

  function dismiss(): void {
    // Mark seen so we never nag again; store no identity.
    setCookie(SEEN_COOKIE, '1', 60 * 60 * 24 * 365)
    setVisible(false)
  }

  function save(): void {
    const n = name.trim()
    const e = email.trim()
    if (n || e) {
      setCookie(COOKIE_IDENTITY, JSON.stringify({ name: n, email: e }), 60 * 60 * 24 * 365)
      // RECONCILE: emit an identify event carrying BOTH the durable fe_visitor id
      // and the new name/email, so the Estelle side can retroactively stitch this
      // device's prior anonymous history to this now-named viewer. Fire-and-forget;
      // any failure is swallowed and never affects the page.
      try {
        const viewerId = readCookie(COOKIE_VIEWER)
        const identity: TrackEvent['identity'] = {
          fe_visitor: readCookie(COOKIE_VISITOR),
          name: n || undefined,
          email: e || undefined,
          source: 'self',
          confidence: 'high',
        }
        if (viewerId) identity.viewerId = viewerId
        const ev: TrackEvent = {
          type: 'identify',
          token,
          clientToken,
          surface,
          identity,
          ts: Date.now(),
          referrer: (() => { try { return document.referrer || '' } catch { return '' } })(),
        }
        fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ events: [ev] }),
          keepalive: true,
        }).catch(() => {})
      } catch { /* never break the page */ }
    }
    setCookie(SEEN_COOKIE, '1', 60 * 60 * 24 * 365)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 right-4 z-[9990] w-[19rem] max-w-[calc(100vw-2rem)] rounded-xl border border-gray-700 bg-[#111] shadow-2xl p-4 text-gray-200"
      role="dialog"
      aria-label="Optional: introduce yourself"
    >
      <button
        type="button"
        aria-label="Dismiss"
        onClick={dismiss}
        className="absolute top-2.5 right-3 text-gray-500 hover:text-gray-300 text-xl leading-none"
      >
        &times;
      </button>
      <div className="text-sm font-semibold text-white mb-1 pr-4">Quick hello (optional)</div>
      <p className="text-xs text-gray-400 leading-relaxed mb-3">
        So Davis knows who stopped by{clientName ? ` from ${clientName}` : ''}. Totally
        optional and it won&apos;t change anything you can see here.
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 mb-2"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email (optional)"
        className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 mb-3"
      />
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={save}
          disabled={!name.trim() && !email.trim()}
          className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
        >
          Introduce myself
        </button>
        <button
          type="button"
          onClick={dismiss}
          className="text-xs text-gray-500 hover:text-gray-300 px-2 py-2"
        >
          No thanks
        </button>
      </div>
    </div>
  )
}
