'use client'

import { useEffect } from 'react'
import { track } from '@vercel/analytics'

// Fires a first-party analytics event when an AUTHENTICATED client opens their gated page.
// Because the page is password-gated, the visit is deterministically this client.
export default function VisitBeacon({ client, token }: { client: string; token: string }) {
  useEffect(() => {
    track('client_page_view', { client, token })
    // Record the visit server-side (Estelle webhook -> DB + Sheet + WhatsApp), with
    // owner-exclusion + throttle handled in /api/visit.
    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    }).catch(() => {})
  }, [client, token])
  return null
}
