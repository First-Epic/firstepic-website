// Client registry for the dynamic /c/<token> route.
// DATA ONLY (no component imports) so it is safe to import from the auth route.
// URLs are opaque random tokens (so the client base can't be enumerated); the
// PASSWORD is the branded/custom part the client recognizes.
// To add a client: (1) add a content component in ./_clients, (2) add it to the
// COMPONENTS map in app/c/[token]/page.tsx, (3) add a line here with a fresh token.
export type ClientMeta = { name: string; password: string }

export const CLIENTS: Record<string, ClientMeta> = {
  'f1e5691bd491': { name: 'Aether / Lightcraft', password: 'lightcraft' },
  'c5f085d1a2c0': { name: 'Collier.Simon', password: 'cosi' },
  '86846dc081c6': { name: 'Paul Siegel & Sanjee Gupta', password: 'eagleworld' },
  // Candidate presentation (page TYPE differs from the proposal pages above).
  '79bb44c4e853': { name: 'Lyra-01 (Science - Marie Nahon)', password: 'science-marie' },
}
