/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_DOMAIN: process.env.SERVER,
  },
  images: {
    domains: ['179.61.188.39', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },
};
module.exports = nextConfig;
