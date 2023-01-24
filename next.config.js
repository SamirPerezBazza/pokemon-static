/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/src',
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
