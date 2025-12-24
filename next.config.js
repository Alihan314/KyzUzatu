/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Ensure API routes are properly handled
  experimental: {
    // This helps with Vercel deployment
  },
};

module.exports = nextConfig;

