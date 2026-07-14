import { NextResponse } from 'next/server'
import { POSITIONS } from '../../c/_registry'

// CLIENT-LEVEL auth for the dashboard (/p/<clientToken>). Validates the password
// against POSITIONS[clientToken].password and, on success, sets a client-scoped
// cookie `p_auth_<clientToken>=granted`. Same cookie mechanics as /api/c-auth
// (httpOnly, sameSite lax, path '/'), but a DIFFERENT cookie namespace so the
// per-candidate gate is never touched or weakened.
export async function POST(request: Request) {
  try {
    const { clientToken, password } = await request.json()
    const pos = POSITIONS[clientToken]

    if (!pos || password !== pos.password) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
    }

    const response = NextResponse.json({ success: true })
    response.cookies.set(`p_auth_${clientToken}`, 'granted', {
      httpOnly: true,
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
