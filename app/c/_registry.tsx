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
  'ca86bfd06ed5': { name: 'Lyra-02 (Science - Marie Nahon)', password: 'science-marie' },
  'b5b49ff29fe5': { name: 'Lyra-03 (Science - Marie Nahon)', password: 'science-marie' },
  'b9d108639e10': { name: 'Lyra-04 (Science - Marie Nahon)', password: 'science-marie' },
  // Lyra-05: engagement-57 client identity is FIREWALLED pre-placement, so the
  // label carries the role, not a client name. Page password = the builder-
  // generated per-candidate password (in the presentation-email draft).
  '97620f3ea5a8': { name: 'Lyra-05 (Designer / Art Director)', password: 'epic-7543d6' },
}

// ---------------------------------------------------------------------------
// POSITIONS: the client-facing DASHBOARD layer (/p/<clientToken>).
// A position groups the individual candidate pages above into one shortlist a
// client can browse. This is ADDITIVE: the CLIENTS map and the /c/<token>
// candidate pages are unchanged and keep working exactly as before.
// The clientToken is a fresh opaque random token (distinct from every candidate
// token) so the dashboard URL can't be guessed from a candidate URL.
// DATA ONLY (no component imports) so it stays safe to import from an auth route.
// ---------------------------------------------------------------------------
export type CandidateDisplay = {
  token: string        // the existing /c/<token> candidate token
  codename: string     // e.g. 'Lyra-01'
  name: string         // display name, e.g. 'Abdullah B.'
  role?: string        // e.g. 'Designer / Art Director'
  hero?: string        // absolute path to a hero image under /public, if one exists
  hook?: string        // short, generic one-liner for the tile (NOT a fabricated claim)
}

export type PositionMeta = {
  clientToken: string
  clientName: string
  position: string
  password: string
  candidateTokens: string[]
  candidates: CandidateDisplay[]
}

// Per-candidate display metadata, pulled from the existing candidate components.
// Hero paths point at assets already shipped under /public/c/<token>/assets/.
// Where an asset isn't present we omit `hero` and the tile falls back to a
// branded placeholder (we don't fabricate an image path that doesn't exist).
const CANDIDATE_DISPLAY: Record<string, CandidateDisplay> = {
  '79bb44c4e853': {
    token: '79bb44c4e853', codename: 'Lyra-01', name: 'Abdullah B.',
    role: 'Designer / Art Director',
    hero: '/c/79bb44c4e853/assets/hero-photo.png',  },
  'ca86bfd06ed5': {
    token: 'ca86bfd06ed5', codename: 'Lyra-02', name: 'Hiba R.',
    role: 'Designer / Art Director',
    hero: '/c-assets/ca86bfd06ed5/lyra-02/hero-photo.png',  },
  'b5b49ff29fe5': {
    token: 'b5b49ff29fe5', codename: 'Lyra-03', name: 'Ameer M.',
    role: 'Designer / Art Director',
    hero: '/c-assets/b5b49ff29fe5/lyra-03/hero-photo.jpg',  },
  'b9d108639e10': {
    token: 'b9d108639e10', codename: 'Lyra-04', name: 'Urooj Z.',
    role: 'Designer / Art Director',
    hero: '/c/b9d108639e10/assets/hero-photo.png',  },
  '97620f3ea5a8': {
    token: '97620f3ea5a8', codename: 'Lyra-05', name: 'Azhar R.',
    role: 'Designer / Art Director',
    hero: '/c/97620f3ea5a8/assets/hero-photo.png',  },
}

export const POSITIONS: Record<string, PositionMeta> = {
  // Science / Marie Nahon - the four Lyra designer candidates.
  '7f3a9c2e1d84': {
    clientToken: '7f3a9c2e1d84',
    clientName: 'Science - Marie Nahon',
    position: 'Designer / Art Director',
    password: 'science-marie',
    candidateTokens: ['79bb44c4e853', 'ca86bfd06ed5', 'b5b49ff29fe5', 'b9d108639e10', '97620f3ea5a8'],
    get candidates() {
      return this.candidateTokens
        .map((t) => CANDIDATE_DISPLAY[t])
        .filter((c): c is CandidateDisplay => Boolean(c))
    },
  },
}

// Look up a position by its opaque clientToken. Returns undefined if unknown.
export function getPosition(clientToken: string): PositionMeta | undefined {
  return POSITIONS[clientToken]
}

// Display meta (name, role, hero path, hook) for a position's candidates, in
// registry order. Degrades gracefully: candidates without a display entry are
// dropped rather than fabricated.
export function getPositionCandidates(clientToken: string): CandidateDisplay[] {
  const pos = POSITIONS[clientToken]
  if (!pos) return []
  return pos.candidateTokens
    .map((t) => CANDIDATE_DISPLAY[t])
    .filter((c): c is CandidateDisplay => Boolean(c))
}

// Reverse lookup: the position (dashboard) a candidate token belongs to, if any.
// Used by the candidate page to offer a "Back to dashboard" link.
export function getPositionForCandidate(candidateToken: string): PositionMeta | undefined {
  for (const key in POSITIONS) {
    if (POSITIONS[key].candidateTokens.includes(candidateToken)) return POSITIONS[key]
  }
  return undefined
}
