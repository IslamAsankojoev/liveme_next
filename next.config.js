const nextConfig = {
  reactStrictMode: false,

  env: {
    SERVER_DOMAIN: process.env.BACKEND_APP_DOMAIN_NAME,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // images.unoptimized = true
};

module.exports = nextConfig;
