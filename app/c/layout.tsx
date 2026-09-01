import type { ReactNode } from 'react'
import BackToTop from '../_back-to-top'

// Segment layout for every /c client-facing page (candidate + proposal pages). Adds the shared
// back-to-top button (identical to the S1-S5 pages) once, so every page inherits it.
export default function ClientCLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <BackToTop />
    </>
  )
}
