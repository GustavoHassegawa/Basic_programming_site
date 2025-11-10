import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  generateBuildId: async () => 'build-' + Date.now(),
};

export default nextConfig;
