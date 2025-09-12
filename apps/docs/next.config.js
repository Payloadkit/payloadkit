/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig