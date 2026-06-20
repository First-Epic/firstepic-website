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

  if (pathname.startsWith('/aether-lightcraft-1040f5d9') && !pathname.startsWith('/aether-lightcraft-1040f5d9/login')) {
    const auth = request.cookies.get('aether-lightcraft-1040f5d9-auth')
    if (auth?.value !== 'granted') {
      return NextResponse.redirect(new URL('/aether-lightcraft-1040f5d9/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/collier-simon/:path*', '/aether-lightcraft-1040f5d9/:path*'],
}
