import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.storyofmathematics.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "mathinsight.org",
        pathname: "/media/image/image/**",
      },
    ],
  },
};

export default nextConfig;
