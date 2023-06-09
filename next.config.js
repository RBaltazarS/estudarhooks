/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  swcMinify:true,
  optimizeFonts:true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/63020237?v=4", 
      },
    ],
    minimumCacheTTL:1500000
  }
}

module.exports = nextConfig
