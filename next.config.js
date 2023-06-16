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
        pathname: "/u/**", 
      },
    ],
    minimumCacheTTL:1500000
  }
}

module.exports = nextConfig
