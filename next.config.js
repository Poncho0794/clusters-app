/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'lh3.googleusercontent.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname:'localhost',
        port: '3000',
        pathname: '/api/images/**'
      },
      {
        protocol: 'https',
        hostname:'clusters-app-5mf6.vercel.app',
        port: '',
        pathname: '/api/images/**'
      }
    ]
  }
}

module.exports = nextConfig
