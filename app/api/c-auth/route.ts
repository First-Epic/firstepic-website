import { NextResponse } from 'next/server'
import { CLIENTS } from '../../c/_registry'
import {
  passwordsMatch,
  isRateLimited,
  recordFailure,
  clearFailures,
  clientIp,
} from '../../../lib/auth-guard'

export async function POST(request: Request) {
  const { token, password } = await request.json()
  const client = CLIENTS[token]

  // Rate-limit repeated FAILED attempts per (token + client-IP) per 60s.
  const rlKey = `c:${token}:${clientIp(request)}`
  if (isRateLimited(rlKey)) {
    return NextResponse.json(
      { error: 'Too many attempts. Try again in a minute.' },
      { status: 429 },
    )
  }

  if (!client || !passwordsMatch(password, client.password)) {
    recordFailure(rlKey)
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  // Success: clear any prior failures so a legit client is not throttled.
  clearFailures(rlKey)

  const response = NextResponse.json({ success: true })
  response.cookies.set(`c_auth_${token}`, 'granted', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
  // Persistent first-party identity for cross-site recognition (readable by analytics).
  // Low-sensitivity: it's the same token already in their URL.
  response.cookies.set('fe_visitor', token, {
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 180, // 180 days
  })
  return response
}
