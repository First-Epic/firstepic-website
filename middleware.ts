import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { POSITIONS } from './app/c/_registry'

// Reverse index: candidateToken -> the set of clientTokens whose position
// INCLUDES that candidate. Built once at module load from POSITIONS (data-only,
// edge-safe). A client cookie only unlocks candidates in ITS OWN position, so a
// candidate is granted strictly by the clientToken(s) listed here and no other.
const GRANTED_BY: Record<string, string[]> = (() => {
  const map: Record<string, string[]> = {}
  for (const clientToken of Object.keys(POSITIONS)) {
    const pos = POSITIONS[clientToken]
    for (const candToken of pos.candidateTokens) {
      ;(map[candToken] ||= []).push(clientToken)
    }
  }
  return map
})()

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // -------------------------------------------------------------------------
  // Client DASHBOARD gate: /p/<clientToken> requires the client cookie.
  // -------------------------------------------------------------------------
  if (pathname.startsWith('/p/')) {
    const seg = pathname.split('/') // ['', 'p', clientToken, ...]
    const clientToken = seg[2]
    // Never gate the login page or the deep-link enter route (they establish auth).
    if (clientToken && seg[3] !== 'login' && seg[3] !== 'enter') {
      const auth = request.cookies.get(`p_auth_${clientToken}`)
      if (auth?.value !== 'granted') {
        return NextResponse.redirect(new URL(`/p/${clientToken}/login`, request.url))
      }
    }
    return NextResponse.next()
  }

  // -------------------------------------------------------------------------
  // Candidate gate: /c/<candidateToken>.
  // Allow if EITHER the existing per-candidate cookie is present (UNCHANGED,
  // checked first) OR a valid client cookie whose position INCLUDES this
  // candidate. The client path only unlocks that client's own candidates.
  // -------------------------------------------------------------------------
  if (pathname.startsWith('/c/')) {
    const seg = pathname.split('/') // ['', 'c', token, ...]
    const token = seg[2]
    if (token && seg[3] !== 'login') {
      // 1) Existing per-token gate (unchanged behavior).
      const auth = request.cookies.get(`c_auth_${token}`)
      if (auth?.value === 'granted') {
        return NextResponse.next()
      }
      // 2) Client-level unlock: any granting clientToken with a valid p_auth cookie.
      const granters = GRANTED_BY[token]
      if (granters) {
        for (const clientToken of granters) {
          const clientAuth = request.cookies.get(`p_auth_${clientToken}`)
          if (clientAuth?.value === 'granted') {
            return NextResponse.next()
          }
        }
      }
      // Neither path granted access -> per-candidate login (unchanged fallback).
      return NextResponse.redirect(new URL(`/c/${token}/login`, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/c/:path*', '/p/:path*'],
}
