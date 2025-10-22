import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Next.js treats the app directory as the project root
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
