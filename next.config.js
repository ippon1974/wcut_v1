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
          },
          {
            source: '/news/id/1035',
            destination: '/news/9',
            permanent: true
          },
          {
            source: '/works/id/1',
            destination: '/works/3',
            permanent: true
          },
          {
            source: '/works/id/1012',
            destination: '/works/13',
            permanent: true
          },
          {
            source: '/works/id/1017',
            destination: '/works/14',
            permanent: true
          },
           {
            source: '/materials/id/3',
            destination: '/materials/marble/size/10',
            permanent: true
          },
           {
            source: '/materials/id/56',
            destination: '/materials/fluoroplast/size/10',
            permanent: true
          }
      ];
  }
};