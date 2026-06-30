/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy Collier-Simon links -> opaque /c/<token> (migrated 2026-06-20)
      { source: '/collier-simon', destination: '/c/c5f085d1a2c0', permanent: false },
      { source: '/collier-simon/:path*', destination: '/c/c5f085d1a2c0', permanent: false },
    ]
  },
  async rewrites() {
    return [
      // /invest is a static investor prospectus (public/invest.html). The site migrated
      // from a static host (where a Netlify edge fn gated /invest) to the Next.js app
      // router on Vercel, which left /invest 404-ing. Serve the static page at /invest.
      { source: '/invest', destination: '/invest.html' },
    ]
  },
}

module.exports = nextConfig
