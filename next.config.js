/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
  // All the other config options you may have...
  async redirects() {
      return [
          {
              source: '/news/id/1040',
              destination: '/news/4',
              permanent: false
          }
      ];
  }
};
