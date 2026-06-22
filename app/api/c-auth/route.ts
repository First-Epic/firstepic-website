import { NextResponse } from 'next/server'
import { CLIENTS } from '../../c/_registry'

export async function POST(request: Request) {
  const { token, password } = await request.json()
  const client = CLIENTS[token]

  if (!client || password !== client.password) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set(`c_auth_${token}`, 'granted', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
  // Persistent first-party identity for cross-site recognition (readable by analytics).
  // Low-sensitivity: it's the same token already in their URL.
  response.cookies.set('fe_visitor', token, {
    httpOnly: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 180, // 180 days
  })
  return response
}
