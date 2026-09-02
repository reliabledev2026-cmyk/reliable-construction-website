import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack does not walk up to the home directory.
  turbopack: { root: import.meta.dirname },
  images: {
    // Remote image hosts. Swap these for your own CDN / CMS domain later,
    // or drop files into /public/images and use local paths in /data.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Retire the illustrative template pages until genuine company portfolio,
  // team and recruitment material is available.
  async redirects() {
    return [
      { source: "/insights/:path*", destination: "/#updates", permanent: false },
      { source: "/team", destination: "/about", permanent: false },
      { source: "/careers", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;
