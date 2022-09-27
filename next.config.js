const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_DOMAIN: process.env.BACKEND_APP_DOMAIN_NAME,
  },
  images: {
    domains: ['179.61.188.39'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
