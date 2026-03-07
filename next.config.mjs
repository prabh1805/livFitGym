/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Set Turbopack root directory
  turbopack: {
    root: process.cwd(),
  },
  // Reduce memory usage during development
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
