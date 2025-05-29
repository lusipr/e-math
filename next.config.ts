import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['img.youtube.com', 'img.freepik.com', 'lh3.googleusercontent.com', 'https://www.storyofmathematics.com', 'https://mathinsight.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.storyofmathematics.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'mathinsight.org',
        pathname: '/media/image/image/**',
      },
    ],
  },
};

export default nextConfig;
