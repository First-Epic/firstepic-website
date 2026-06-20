import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/collier-simon') && !pathname.startsWith('/collier-simon/login')) {
    const auth = request.cookies.get('collier-simon-auth')
    if (auth?.value !== 'granted') {
      return NextResponse.redirect(new URL('/collier-simon/login', request.url))
    }
  }

  if (pathname.startsWith('/aether-lightcraft') && !pathname.startsWith('/aether-lightcraft/login')) {
    const auth = request.cookies.get('aether-lightcraft-auth')
    if (auth?.value !== 'granted') {
      return NextResponse.redirect(new URL('/aether-lightcraft/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/collier-simon/:path*', '/aether-lightcraft/:path*'],
}
