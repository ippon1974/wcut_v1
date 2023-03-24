/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
  async redirects() {
      return [
          {
              source: '/news/id/1040',
              destination: '/news/4',
              permanent: true
          }
      ];
  }
};
