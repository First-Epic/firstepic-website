// Shared click-stream + identity types for the client portal (Part C).
//
// DATA + TYPES ONLY (no React, no Node crypto) so this file is safe to import
// from BOTH the browser tracker (app/_tracker.tsx) and the server endpoint
// (app/api/track/route.ts). Keeping the schema in one place means the wire
// contract stays identical on both ends and the Estelle side (Part D) has a
// single source of truth for what it will receive.
//
// Design rules baked in here:
//  - Tracking is ATTRIBUTION, not access control. The visitor is already
//    authenticated by the cookie gate; identity here only tells us WHO among a
//    client's team is looking, and how confident we are about it.
//  - We NEVER assert an identity we don't actually have. The resolver reports a
//    `source` and a `confidence`, and the server/Estelle can down-weight or
//    ignore low-confidence signals. See resolveIdentity() in app/_tracker.tsx.

// The granular event types we emit from a client surface. `page_view` here is
// the tracker's own open event; the ORIGINAL /api/visit page-view beacon is
// untouched and keeps firing separately, so nothing existing breaks.
export type TrackEventType =
  | 'page_view'        // tracker mounted on an authenticated page
  | 'dwell'            // time-on-page flush (visibility hidden / unload / periodic)
  | 'section_view'     // a major section scrolled into view for the first time
  | 'deck_open'        // a multi-page deck viewer was opened
  | 'lightbox_open'    // an image/video lightbox was opened
  | 'video_play'       // an inline/lightbox video started playing
  | 'video_complete'   // a video played to (or near) its end
  | 'portfolio_open'   // a curated-portfolio piece was opened
  | 'folder_open'      // the optional-deliverables folder was expanded
  | 'tile_click'       // a candidate tile on the /p dashboard was clicked
  | 'identify'         // the viewer self-identified (name/email)

// How we resolved WHO this viewer is. Best-signal-wins, most-trusted first:
//   'link'   Tier 1a: arrived via a deep-link that carried a viewer id (high)
//   'self'   Tier 1b: the viewer typed their name/email into the prompt (high)
//   'cookie' Tier 2 : a durable first-party fe_visitor id, no name yet (medium)
//   'ip'     Tier 3 : server-side IP/UA clustering only, never a NAME    (low)
export type IdentitySource = 'link' | 'self' | 'cookie' | 'ip'
export type IdentityConfidence = 'high' | 'medium' | 'low'

// The identity block that rides on EVERY event. Optional fields are only set
// when we genuinely have them; absence is meaningful (do not invent a name).
export type IdentityBlock = {
  viewerId?: string        // per-viewer id from a deep-link (Tier 1a)
  name?: string            // self-identified display name (Tier 1b)
  email?: string           // self-identified email (Tier 1b)
  fe_visitor: string       // durable first-party visitor id (Tier 2), always present client-side
  source: IdentitySource   // which tier won
  confidence: IdentityConfidence
}

// The full event payload sent to the server (which enriches it with IP/UA and
// forwards to the Estelle webhook). Unknown/extra fields are harmless.
export type TrackEvent = {
  type: TrackEventType
  token: string            // the /c/<token> candidate token (or dashboard clientToken)
  clientToken?: string     // the /p/<clientToken> position, when on the dashboard
  surface: 'candidate' | 'dashboard'
  identity: IdentityBlock
  ts: number               // client timestamp, unix ms
  referrer?: string
  // Event-specific detail. All optional; only the relevant ones are set.
  detail?: {
    section?: string       // section id, e.g. 'sec-portfolio'
    label?: string         // human label of the opened artifact/tile
    src?: string           // media source path, when relevant
    dwellMs?: number       // accumulated visible time on page (dwell events)
    maxScrollPct?: number  // deepest scroll reached, 0-100
    sectionsSeen?: string[]// which sections were reached this session
    candidateToken?: string// for tile_click: which candidate tile
    videoPct?: number      // video progress 0-100 (video_complete)
  }
}

// Cookie names (kept here so client + server agree exactly).
export const COOKIE_VISITOR = 'fe_visitor'   // Tier 2 durable id (readable client-side)
export const COOKIE_VIEWER = 'fe_viewer'     // Tier 1a deep-link viewer id
export const COOKIE_IDENTITY = 'fe_identity' // Tier 1b self-identified name/email (JSON)
export const COOKIE_OWNER = 'fe_owner'       // owner-exclusion (Davis), reused from /api/visit
