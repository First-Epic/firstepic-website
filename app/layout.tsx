import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'First Epic | Graduate from Upwork',
  description: 'Stop churning through freelancers. Build your remote team with embedded talent that actually sticks around.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="%23ffffff"/><text x="50" y="55" font-family="monospace" font-weight="bold" font-size="50" fill="%23000000" text-anchor="middle" dominant-baseline="middle">FE</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='10' fill='%23ffffff'/><text x='50' y='55' font-family='monospace' font-weight='bold' font-size='50' fill='%23000000' text-anchor='middle' dominant-baseline='middle'>FE</text></svg>" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
