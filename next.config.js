/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Add placeholder configuration
    unoptimized: process.env.NODE_ENV === "development",
  },
};

module.exports = nextConfig;
