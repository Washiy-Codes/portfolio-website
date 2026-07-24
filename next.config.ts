import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '://gstatic.com',
        pathname: '/**',
      },
      // 1. Add the missing forum CDN domain here
      {
        protocol: 'https',
        hostname: 'global.discourse-cdn.com',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
