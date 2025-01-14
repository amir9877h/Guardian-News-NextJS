import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.guim.co.uk",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static.guim.co.uk",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "static.guim.co.uk",
        pathname: "**",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
