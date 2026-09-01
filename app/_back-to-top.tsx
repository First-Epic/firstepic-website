'use client'
import { useEffect, useState } from 'react'

// The exact S1-S5 floating back-to-top button, as a CLIENT component so its scroll behavior runs
// reliably in the Next App Router (an inline <script> in a server component does not execute).
// Appears past 320px of scroll, smooth-scrolls to top. CSS identical to ui_media_viewer's .tv-top.
const CSS = `.tv-top{position:fixed;right:20px;bottom:20px;z-index:1200;width:44px;height:44px;border-radius:12px;cursor:pointer;display:grid;place-items:center;font-size:1.15rem;color:#c7cbff;border:1px solid rgba(129,140,248,.45);background:rgba(20,20,24,.86);backdrop-filter:blur(8px);opacity:0;transform:translateY(8px);transition:opacity .2s,transform .2s,background .15s;pointer-events:none;box-shadow:0 6px 20px rgba(0,0,0,.35);}
.tv-top.show{opacity:1;transform:translateY(0);pointer-events:auto;}
.tv-top:hover{background:rgba(30,30,38,.95);color:#fff;}
.tvw-lock .tv-top{display:none !important;}`

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const upd = () => setShow((window.scrollY || document.documentElement.scrollTop) > 320)
    window.addEventListener('scroll', upd, { passive: true })
    upd()
    return () => window.removeEventListener('scroll', upd)
  }, [])
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <button
        className={show ? 'tv-top show' : 'tv-top'}
        id="tvTop"
        type="button"
        aria-label="Back to top"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        &#8593;
      </button>
    </>
  )
}
