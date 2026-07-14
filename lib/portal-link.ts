// Signed, expiring deep-link tokens for the client portal (/p/<clientToken>).
//
// A deep-link lets a new-candidate notification log the client straight in and
// land them on a target page (the dashboard, or a specific candidate). The link
// carries a signed payload; the /p/<clientToken>/enter route verifies it, sets
// the client cookie, and 302-redirects to the target.
//
// Scheme: HMAC-SHA256 over a compact JSON payload. Payload + signature are
// base64url-encoded and joined with a '.' -> "<payloadB64>.<sigB64>".
// The payload bakes in an expiry timestamp (exp, unix seconds); verify() rejects
// anything past exp. The secret comes from FE_PORTAL_LINK_SECRET (env) and has
// NO default: if it is unset, sign() and verify() both fail closed so no
// deep-link can ever be minted or accepted with a guessable key.
//
// This module uses Node's `crypto` and must run on the Node.js runtime (the
// consuming route sets `export const runtime = 'nodejs'`). It is NOT imported by
// edge middleware.

import crypto from 'crypto'

export type PortalLinkPayload = {
  clientToken: string // which position/client this link authenticates
  target: string      // where to land after auth (a relative path, e.g. /p/<t> or /c/<t>)
  exp: number         // expiry as unix seconds
  viewerId?: string   // OPTIONAL per-viewer id (Tier-1a identity). When a link is
                      // minted for a specific named person on the client's team,
                      // this rides along so the enter route can set fe_viewer and
                      // we can attribute the click-stream to that viewer (high
                      // confidence). Absent for generic/shared links.
}

function getSecret(): string {
  const secret = process.env.FE_PORTAL_LINK_SECRET
  if (!secret || secret.length < 16) {
    // Fail closed: without a real secret, no link can be signed or verified.
    throw new Error('FE_PORTAL_LINK_SECRET is not set (or too short)')
  }
  return secret
}

function b64url(buf: Buffer): string {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function b64urlDecode(s: string): Buffer {
  const pad = s.length % 4 === 0 ? '' : '='.repeat(4 - (s.length % 4))
  return Buffer.from(s.replace(/-/g, '+').replace(/_/g, '/') + pad, 'base64')
}

function hmac(secret: string, data: string): Buffer {
  return crypto.createHmac('sha256', secret).update(data).digest()
}

// Mint a signed deep-link token. `ttlSeconds` sets how long the link is valid
// (default 14 days). Returns the "<payload>.<sig>" string to embed in a URL.
export function sign(
  input: { clientToken: string; target: string; exp?: number; ttlSeconds?: number; viewerId?: string },
): string {
  const secret = getSecret()
  const exp =
    input.exp ??
    Math.floor(Date.now() / 1000) + (input.ttlSeconds ?? 60 * 60 * 24 * 14)
  const payload: PortalLinkPayload = {
    clientToken: input.clientToken,
    target: input.target,
    exp,
  }
  // Only include viewerId when actually provided (keeps generic links compact
  // and their payloads unchanged from before this feature).
  if (typeof input.viewerId === 'string' && input.viewerId) {
    payload.viewerId = input.viewerId
  }
  const payloadB64 = b64url(Buffer.from(JSON.stringify(payload), 'utf8'))
  const sig = b64url(hmac(secret, payloadB64))
  return `${payloadB64}.${sig}`
}

// Verify a signed deep-link token. Returns the payload if the signature is valid
// and the token is not expired; returns null on ANY problem (bad shape, bad
// signature, expired, or missing secret). Callers must treat null as "deny".
export function verify(sig: string): PortalLinkPayload | null {
  try {
    const secret = getSecret()
    if (typeof sig !== 'string' || !sig.includes('.')) return null
    const [payloadB64, providedSig] = sig.split('.')
    if (!payloadB64 || !providedSig) return null

    const expectedSig = b64url(hmac(secret, payloadB64))
    // Constant-time compare on equal-length buffers.
    const a = Buffer.from(providedSig)
    const b = Buffer.from(expectedSig)
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null

    const payload = JSON.parse(b64urlDecode(payloadB64).toString('utf8')) as PortalLinkPayload
    if (
      !payload ||
      typeof payload.clientToken !== 'string' ||
      typeof payload.target !== 'string' ||
      typeof payload.exp !== 'number'
    ) {
      return null
    }
    if (Math.floor(Date.now() / 1000) > payload.exp) return null
    return payload
  } catch {
    // Any error (incl. missing secret) fails closed.
    return null
  }
}
