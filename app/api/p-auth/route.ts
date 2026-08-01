import { NextResponse } from 'next/server'
import { POSITIONS, getHub } from '../../c/_registry'
import {
  passwordsMatch,
  isRateLimited,
  recordFailure,
  clearFailures,
  clientIp,
} from '../../../lib/auth-guard'

// CLIENT-LEVEL auth for the dashboard (/p/<clientToken>). Validates the password
// against POSITIONS[clientToken].password and, on success, sets a client-scoped
// cookie `p_auth_<clientToken>=granted`. Same cookie mechanics as /api/c-auth
// (httpOnly, sameSite lax, path '/'), but a DIFFERENT cookie namespace so the
// per-candidate gate is never touched or weakened.
export async function POST(request: Request) {
  try {
    const { clientToken, password } = await request.json()
    const pos = POSITIONS[clientToken]

    // Rate-limit repeated FAILED attempts per (token + client-IP) per 60s.
    const rlKey = `p:${clientToken}:${clientIp(request)}`
    if (isRateLimited(rlKey)) {
      return NextResponse.json(
        { error: 'Too many attempts. Try again in a minute.' },
        { status: 429 },
      )
    }

    const cookieOpts = {
      httpOnly: true,
      secure: true,
      sameSite: 'lax' as const,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    }

    // ---------------------------------------------------------------------
    // HUB path: when the token isn't a position, it may be a HUB. A hub login
    // sets the hub cookie AND each child position's cookie, so clicking through
    // from the hub to a position dashboard never re-prompts. This is ADDITIVE
    // and leaves the position path below completely unchanged.
    // ---------------------------------------------------------------------
    if (!pos) {
      const hub = getHub(clientToken)
      if (hub && passwordsMatch(password, hub.password)) {
        clearFailures(rlKey)
        const response = NextResponse.json({ success: true })
        response.cookies.set(`p_auth_${hub.hubToken}`, 'granted', cookieOpts)
        for (const p of hub.positions) {
          response.cookies.set(`p_auth_${p.clientToken}`, 'granted', cookieOpts)
        }
        return response
      }
      // Not a valid hub login -> fall through to the failure path below.
    }

    if (!pos || !passwordsMatch(password, pos.password)) {
      recordFailure(rlKey)
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
    }

    // Success: clear any prior failures so a legit client is not throttled.
    clearFailures(rlKey)

    const response = NextResponse.json({ success: true })
    response.cookies.set(`p_auth_${clientToken}`, 'granted', cookieOpts)
    return response
  } catch {
    // Malformed body etc. -> fail closed.
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
