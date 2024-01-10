/** 
 * @type {import('next').NextConfig} 
 * */

const nextConfig = {
  experimental: {
    serverActions: {
      // TODO UPDATE ORIGINS
      allowedOrigins: ['localhost:3000', 'localhost:8080', '*.my-proxy.com'],
    },
  }
}

module.exports = nextConfig
