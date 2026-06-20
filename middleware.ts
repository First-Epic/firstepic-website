import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Generic gate for all dynamic client pages at /c/<token>.
  if (pathname.startsWith('/c/')) {
    const seg = pathname.split('/') // ['', 'c', token, ...]
    const token = seg[2]
    if (token && seg[3] !== 'login') {
      const auth = request.cookies.get(`c_auth_${token}`)
      if (auth?.value !== 'granted') {
        return NextResponse.redirect(new URL(`/c/${token}/login`, request.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/c/:path*'],
}
