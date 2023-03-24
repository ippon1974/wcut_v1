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
          },
          {
            source: '/works/id/1018',
            destination: '/works/15',
            permanent: true
          }
      ];
  }
};
