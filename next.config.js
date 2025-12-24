/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Ensure proper routing on Vercel
  output: 'standalone',
  // Disable static optimization for dynamic routes
  experimental: {
    // Helps with Vercel deployment
  },
};

module.exports = nextConfig;

