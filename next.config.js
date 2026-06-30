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
}

module.exports = nextConfig
