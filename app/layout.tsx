import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'First Epic | Graduate from Upwork',
  description: 'Stop churning through freelancers. Build your remote team with embedded talent that actually sticks around. Physical workspace in Pakistan with HR, IT, and daily oversight.',
  keywords: 'remote team, embedded talent, pakistan office, upwork alternative, freelancer alternative, offshore development, startup hiring',
  authors: [{ name: 'Davis Brimer' }],
  openGraph: {
    title: 'First Epic | Graduate from Upwork',
    description: 'Stop churning through freelancers. Build your remote team with embedded talent that actually sticks around.',
    url: 'https://firstepic.studio',
    siteName: 'First Epic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Epic | Graduate from Upwork',
    description: 'Stop churning through freelancers. Build your remote team with embedded talent that actually sticks around.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
