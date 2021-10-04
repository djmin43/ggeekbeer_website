/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://ggeekbeer.oopy.io/',
        permanent: false,
      },
    ]
  },
}
