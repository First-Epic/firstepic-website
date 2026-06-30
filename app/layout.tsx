import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import KnownVisitor from './_known-visitor'
import LinkedInInsight from './_linkedin-insight'
import './globals.css'

export const metadata: Metadata = {
  title: 'First Epic | Build Your Remote Team',
  description: 'Full-time embedded talent with real infrastructure. Developers, designers, and PMs who work exclusively for you - backed by our physical studio, HR, IT, and professional support.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <Analytics />
        <KnownVisitor />
        {/* LinkedIn ad pixel — marketing pages only; suppressed on /c/* (see component) */}
        <LinkedInInsight />
      </body>
    </html>
  )
}