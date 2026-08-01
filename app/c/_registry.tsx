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
  // Lyra-05: the client-facing surface names the client normally (Davis 2026-07-15;
  // the identity firewall is candidate-facing only). Password unified to the
  // position password (Davis ruling 8, 2026-07-16): pages take the POSITION entry's
  // password, never a per-candidate random one.
  '97620f3ea5a8': { name: 'Lyra-05 (Science - Marie Nahon)', password: 'science-marie' },
  // Lyra-06 (Zubair K.): PREVIEW-ONLY. Added to CLIENTS so the password-gated
  // /c/ page works; deliberately NOT added to POSITIONS/CANDIDATE_DISPLAY below,
  // so it stays off the client dashboard until Davis approves live-to-client.
  '220ff76fc6f1': { name: 'Lyra-06 (Science - Marie Nahon)', password: 'science-marie' },
  // Carina-01 (Affan K.) for CARINA / The Artist's Journey. Password matches the CARINA
  // position below so one position login also unlocks this candidate page.
  'ddf2afe2e2e8': { name: "Carina-01 (The Artist's Journey - Wilfred Lee)", password: 'journey-wilfred' },
  'ab9a97f74f07': { name: "Carina-02 (The Artist's Journey - Wilfred Lee)", password: 'journey-wilfred' },
  '50c0238d4d04': { name: "Vela-01 (The Artist's Journey - Wilfred Lee)", password: 'journey-wilfred' },
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
  // Lyra-06 (Zubair K.): display meta with hero present. Still PREVIEW-ONLY -
  // deliberately NOT added to POSITIONS.candidateTokens, so it stays off the
  // client dashboard until Davis approves live-to-client (that token addition
  // is the actual gate; this entry is inert until then).
  '220ff76fc6f1': {
    token: '220ff76fc6f1', codename: 'Lyra-06', name: 'Zubair K.',
    role: 'Designer / Art Director',
    hero: '/c/220ff76fc6f1/assets/hero-photo.png',  },
  'ddf2afe2e2e8': {
    token: 'ddf2afe2e2e8', codename: 'Carina-01', name: 'Affan K.',
    role: 'AI Video Team Lead', hero: '/c/ddf2afe2e2e8/assets/profile-photo.jpg',  },
  'ab9a97f74f07': {
    token: 'ab9a97f74f07', codename: 'Carina-02', name: 'Hafsa M.',
    role: 'AI Video Team Lead', hero: '/c/ab9a97f74f07/assets/profile-photo.jpg',  },
  '50c0238d4d04': {
    token: '50c0238d4d04', codename: 'Vela-01', name: 'Qasim Z.',
    role: 'AI Video Generation Artist', hero: '/c/50c0238d4d04/assets/profile-photo.jpg',  },
}

export const POSITIONS: Record<string, PositionMeta> = {
  // Science / Marie Nahon - the Lyra designer candidates.
  '7f3a9c2e1d84': {
    clientToken: '7f3a9c2e1d84',
    clientName: 'Science - Marie Nahon',
    position: 'Designer / Art Director',
    password: 'science-marie',
    candidateTokens: ['79bb44c4e853', 'ca86bfd06ed5', 'b5b49ff29fe5', 'b9d108639e10', '97620f3ea5a8', '220ff76fc6f1'],
    get candidates() {
      return this.candidateTokens
        .map((t) => CANDIDATE_DISPLAY[t])
        .filter((c): c is CandidateDisplay => Boolean(c))
    },
  },
  // The Artist's Journey / Wilfred Lee - the CARINA "AI Video Team Lead" shortlist.
  // Password matches the Carina-01 CLIENTS entry so a position login also unlocks the
  // candidate page (GRANTED_BY reverse-index in middleware.ts rebuilds from this).
  'a6dfec43b882': {
    clientToken: 'a6dfec43b882',
    clientName: "The Artist's Journey - Wilfred Lee",
    position: 'AI Video Team Lead',
    password: 'journey-wilfred',
    candidateTokens: ['ddf2afe2e2e8', 'ab9a97f74f07'],
    get candidates() {
      return this.candidateTokens
        .map((t) => CANDIDATE_DISPLAY[t])
        .filter((c): c is CandidateDisplay => Boolean(c))
    },
  },
  // The Artist's Journey / Wilfred Lee - the VELA "AI Video Generation Artist" shortlist.
  '575f4ee8aeb7': {
    clientToken: '575f4ee8aeb7',
    clientName: "The Artist's Journey - Wilfred Lee",
    position: 'AI Video Generation Artist',
    password: 'journey-wilfred',
    candidateTokens: ['50c0238d4d04'],
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

// ---------------------------------------------------------------------------
// HUBS: the client-facing HUB layer (/p/<hubToken>). A hub groups MULTIPLE
// positions (its child dashboards) into one gated landing page a client can be
// sent as a single link. One hub login unlocks the hub cookie AND each child
// position's cookie, so clicking through to a position never re-prompts.
// DATA ONLY (no component imports) so it stays safe to import from an auth route.
// The hubToken is a fresh opaque random token, distinct from every position and
// candidate token, so the hub URL can't be guessed from a child URL.
// ---------------------------------------------------------------------------
export interface HubMeta {
  hubToken: string
  clientName: string
  password: string
  positions: Array<{
    clientToken: string
    codename: string
    role: string
    avatars: string[]
    count: number
  }>
  comingSoon: Array<{ codename: string; role: string }>
}

export const HUBS: Record<string, HubMeta> = {
  // The Artist's Journey / Wilfred Lee - a single hub over the CARINA + VELA
  // positions (PUPPIS is coming soon). Password matches the child position
  // passwords so one hub login also unlocks each position dashboard.
  '99a3acb38ee4': {
    hubToken: '99a3acb38ee4',
    clientName: "The Artist's Journey - Wilfred Lee",
    password: 'journey-wilfred',
    positions: [
      {
        clientToken: 'a6dfec43b882',
        codename: 'CARINA',
        role: 'AI Video Team Lead',
        avatars: ['affan.jpg', 'hafsa.jpg'],
        count: 2,
      },
      {
        clientToken: '575f4ee8aeb7',
        codename: 'VELA',
        role: 'AI Video Generation Artist',
        avatars: ['qasim.jpg'],
        count: 1,
      },
    ],
    comingSoon: [{ codename: 'PUPPIS', role: 'AI Image Artist' }],
  },
}

// Look up a hub by its opaque hubToken. Returns undefined if unknown.
export function getHub(token: string): HubMeta | undefined {
  return HUBS[token]
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

// The hub (if any) a position belongs to - powers the "back to positions" pill on
// a dashboard so the client can return to the multi-position landing page.
export function getHubForPosition(clientToken: string): HubMeta | undefined {
  for (const key in HUBS) {
    if (HUBS[key].positions.some((p) => p.clientToken === clientToken)) return HUBS[key]
  }
  return undefined
}
