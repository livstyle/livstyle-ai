import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable experimental turbopack for static export
  experimental: {
    // Enable React 19 support
  },
};

export default nextConfig;
