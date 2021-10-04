/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://four-credit-079.notion.site/Ggeek-Beer-Co-afa6bc2cf2b54420a798cf8870280b52',
        permanent: false,
      },
    ]
  },
}
