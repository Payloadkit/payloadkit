/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    mdxRs: true,
  },
  // Redirects disabled for static export
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/docs',
  //       permanent: false,
  //     },
  //   ]
  // },
}

module.exports = nextConfig