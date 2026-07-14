// Mint a signed deep-link for the client portal.
//
// A deep-link logs a client straight into their dashboard (or onto a specific
// candidate page) with no password prompt. It is signed with
// FE_PORTAL_LINK_SECRET and expires (default 14 days).
//
// Usage (from the repo root, with the secret in the environment):
//
//   FE_PORTAL_LINK_SECRET=... npx tsx scripts/mint-portal-link.ts \
//     --client 7f3a9c2e1d84 \
//     [--candidate 79bb44c4e853] \
//     [--base https://firstepic.studio] \
//     [--ttl 1209600]
//
// - --client     REQUIRED clientToken (a key in POSITIONS).
// - --candidate  OPTIONAL candidateToken to land on (must belong to the client).
//                Omit to land on the dashboard.
// - --base       OPTIONAL absolute site origin for the printed URL
//                (default https://firstepic.studio).
// - --ttl        OPTIONAL lifetime in seconds (default 1209600 = 14 days).
//
// Prints the full deep-link URL to stdout.

import { sign } from '../lib/portal-link'

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`)
  return i >= 0 ? process.argv[i + 1] : undefined
}

const clientToken = arg('client')
if (!clientToken) {
  console.error('ERROR: --client <clientToken> is required')
  process.exit(1)
}
if (!process.env.FE_PORTAL_LINK_SECRET) {
  console.error('ERROR: FE_PORTAL_LINK_SECRET must be set in the environment')
  process.exit(1)
}

const candidate = arg('candidate')
const base = (arg('base') || 'https://firstepic.studio').replace(/\/+$/, '')
const ttl = arg('ttl') ? parseInt(arg('ttl') as string, 10) : undefined

const target = candidate ? `/c/${candidate}` : `/p/${clientToken}`

try {
  const sig = sign({ clientToken, target, ttlSeconds: ttl })
  const url = `${base}/p/${clientToken}/enter?sig=${encodeURIComponent(sig)}`
  console.log(url)
} catch (e) {
  console.error('ERROR: failed to sign link:', (e as Error).message)
  process.exit(1)
}
