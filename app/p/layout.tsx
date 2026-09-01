import type { ReactNode } from 'react'
import BackToTop from '../_back-to-top'

// Segment layout for every /p client-facing page (position dashboards + hub/portal). Adds the
// shared back-to-top button (identical to the S1-S5 pages) once, so every page inherits it.
export default function ClientPLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <BackToTop />
    </>
  )
}
