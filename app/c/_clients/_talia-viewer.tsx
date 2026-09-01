'use client'
import { useEffect } from 'react'
import { TVW_HEAD, TVW_JS } from './_talia-viewer-assets'

// Loads the universal TaliaViewer lightbox reliably in the Next App Router: the style + overlay
// DOM render via dangerouslySetInnerHTML, and the script is appended as a real <script> element on
// mount (a dynamically-appended script executes, unlike an inline dangerouslySetInnerHTML one).
// Event-delegated on data-tvw-src, so any tagged image opens it.
export default function TaliaViewer() {
  useEffect(() => {
    const w = window as unknown as { __tvwLoaded?: boolean }
    if (w.__tvwLoaded) return
    w.__tvwLoaded = true
    const s = document.createElement('script')
    s.textContent = TVW_JS
    document.body.appendChild(s)
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: TVW_HEAD }} />
}
