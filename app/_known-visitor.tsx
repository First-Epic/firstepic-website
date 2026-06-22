'use client'

import { useEffect } from 'react'
import { track } from '@vercel/analytics'

// Runs on EVERY page. If a known client has previously authenticated to a gated /c/<token>
// page, they carry the first-party `fe_visitor` cookie - so we can recognize them when they
// browse the rest of firstepic.studio and log it as a known visit.
export default function KnownVisitor() {
  useEffect(() => {
    const m = document.cookie.match(/(?:^|; )fe_visitor=([^;]+)/)
    if (m) track('known_visitor', { visitor: decodeURIComponent(m[1]) })
  }, [])
  return null
}
