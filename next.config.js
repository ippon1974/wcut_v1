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
          },
          {
            source: '/materials/id/19',
            destination: '/materials/steel_black/size/10',
            permanent: true
          },
          {
            source: '/news/id/1039',
            destination: '/news/5',
            permanent: true
          },
          {
            source: '/works/id/7',
            destination: '/works/12',
            permanent: true
          },
          {
            source: '/works/id/11',
            destination: '/works/7',
            permanent: true
          },
          {
            source: '/news/id/19',
            destination: '/news/18',
            permanent: true
          },
          {
            source: '/news/id/24',
            destination: '/news/19',
            permanent: true
          },
          {
            source: '/news/id/13',
            destination: '/news/26',
            permanent: true
          },
          {
            source: '/news/id/16',
            destination: '/news/23',
            permanent: true
          }

      ];
  }
};