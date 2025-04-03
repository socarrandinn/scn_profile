import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
