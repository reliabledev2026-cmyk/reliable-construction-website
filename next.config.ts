import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack does not walk up to the home directory.
  turbopack: { root: import.meta.dirname },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
