import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'First Epic | Graduate from Upwork',
  description: 'Stop churning through freelancers. Build your remote team with embedded talent that actually sticks around.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
