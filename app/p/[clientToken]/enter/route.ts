import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from '../../../../lib/portal-link'
import { POSITIONS } from '../../../c/_registry'

// Node runtime: the signing helper uses Node's `crypto`.
export const runtime = 'nodejs'

// DEEP-LINK MAGIC-LINK: /p/<clientToken>/enter?sig=<signed-token>
//
// Accepts a signed, expiring token (HMAC-SHA256, see lib/portal-link.ts),
// verifies it, and on success sets the client cookie `p_auth_<clientToken>` and
// 302-redirects to the payload's target (the dashboard OR a specific candidate
// page). This lets a new-candidate notification link log the client straight in
// and land them on that candidate.
//
// Fail-safe: any bad/expired/mismatched signature, unknown position, or
// out-of-scope target falls back gracefully to the normal password login for
// this client. It never crashes and never opens access.
export async function GET(
  request: NextRequest,
  { params }: { params: { clientToken: string } },
) {
  const { clientToken } = params
  const loginUrl = new URL(`/p/${clientToken}/login`, request.url)

  try {
    const sig = request.nextUrl.searchParams.get('sig')
    if (!sig) return NextResponse.redirect(loginUrl)

    const payload = verify(sig)
    // Signature must be valid, unexpired, and bound to THIS client token.
    if (!payload || payload.clientToken !== clientToken) {
      return NextResponse.redirect(loginUrl)
    }

    const pos = POSITIONS[clientToken]
    if (!pos) return NextResponse.redirect(loginUrl)

    // Resolve + scope the redirect target. Only allow this client's own
    // dashboard or one of its own candidate pages; anything else -> dashboard.
    // This prevents a signed link from being used as an open redirect or to
    // grant a landing on another client's surface.
    const dashboard = `/p/${clientToken}`
    let target = dashboard
    const t = payload.target
    if (typeof t === 'string' && t.startsWith('/')) {
      if (t === dashboard || t === `${dashboard}/`) {
        target = dashboard
      } else if (t.startsWith('/c/')) {
        const candToken = t.split('/')[2]
        if (candToken && pos.candidateTokens.includes(candToken)) {
          target = `/c/${candToken}`
        }
      }
    }

    const response = NextResponse.redirect(new URL(target, request.url))
    response.cookies.set(`p_auth_${clientToken}`, 'granted', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    // TIER-1a IDENTITY: if this deep-link was minted for a specific named viewer,
    // it carries a viewerId. Set the durable fe_viewer cookie so the click-stream
    // tracker can attribute activity to that viewer with HIGH confidence. The
    // cookie is NOT httpOnly because the browser tracker reads it to build the
    // identity block; it carries no secret (just an opaque viewer id) and grants
    // no access on its own (access is the p_auth cookie above).
    if (typeof payload.viewerId === 'string' && payload.viewerId) {
      response.cookies.set('fe_viewer', payload.viewerId, {
        httpOnly: false,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 90, // 90 days
      })
    }
    return response
  } catch {
    // Fail closed: any unexpected error routes to the normal login.
    return NextResponse.redirect(loginUrl)
  }
}
