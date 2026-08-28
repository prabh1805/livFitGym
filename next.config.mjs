/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  devIndicators: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Set Turbopack root directory
  turbopack: {
    root: process.cwd(),
  },
  // Reduce memory usage during development
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
