import { timingSafeEqual } from 'crypto'

// Security hardening helpers shared by the portal auth routes
// (/api/p-auth and /api/c-auth). Additive only: these do not change any
// accept/reject LOGIC, they just make the existing checks harder to attack.

// Constant-time password comparison. A plain `a !== b` short-circuits on the
// first differing byte, which leaks length/prefix timing that a patient
// attacker can measure. timingSafeEqual compares in constant time. It requires
// equal-length buffers, so we guard for that first (unequal length -> false,
// which preserves the exact same reject behavior a plain !== would give).
export function passwordsMatch(input: unknown, expected: unknown): boolean {
  if (typeof input !== 'string' || typeof expected !== 'string') return false
  const a = Buffer.from(input, 'utf8')
  const b = Buffer.from(expected, 'utf8')
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

// Simple in-memory rate limiter for failed auth attempts.
//
// NOTE: this Map is per-server-instance and non-durable. On a serverless
// platform (Vercel) each instance has its own Map, so a determined attacker
// spread across instances gets more than the nominal budget. The production
// grade upgrade is a durable shared store (e.g. Vercel KV / Redis) keyed the
// same way. In-memory is still meaningfully better than nothing: it caps the
// common single-origin brute-force burst against one instance.
const WINDOW_MS = 60 * 1000 // 60s sliding window
const MAX_FAILURES = 5 // max failed attempts per key per window

type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()

// Returns true if this key is currently over its failure budget (-> caller
// should 429). Does NOT record anything; call recordFailure() on a failed auth.
export function isRateLimited(key: string): boolean {
  const now = Date.now()
  const b = buckets.get(key)
  if (!b) return false
  if (now >= b.resetAt) {
    buckets.delete(key)
    return false
  }
  return b.count >= MAX_FAILURES
}

// Record one failed auth attempt for this key within the current window.
export function recordFailure(key: string): void {
  const now = Date.now()
  const b = buckets.get(key)
  if (!b || now >= b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return
  }
  b.count += 1
}

// Clear a key's failure record. Called on a SUCCESSFUL auth so a legitimate
// client who fat-fingered a few times is not throttled once they get it right.
export function clearFailures(key: string): void {
  buckets.delete(key)
}

// Best-effort client IP from x-forwarded-for (first hop is the real client;
// subsequent hops are proxies). Falls back to 'unknown' so the limiter still
// keys on the token when the header is absent.
export function clientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) {
    const first = xff.split(',')[0]?.trim()
    if (first) return first
  }
  return 'unknown'
}
