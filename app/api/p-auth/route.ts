import { NextResponse } from 'next/server'
import { POSITIONS } from '../../c/_registry'
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

    if (!pos || !passwordsMatch(password, pos.password)) {
      recordFailure(rlKey)
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
    }

    // Success: clear any prior failures so a legit client is not throttled.
    clearFailures(rlKey)

    const response = NextResponse.json({ success: true })
    response.cookies.set(`p_auth_${clientToken}`, 'granted', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return response
  } catch {
    // Malformed body etc. -> fail closed.
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
