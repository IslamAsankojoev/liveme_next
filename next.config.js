const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'default', 'tr', 'kg'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  env: {
    SERVER_DOMAIN: process.env.BACKEND_APP_DOMAIN_NAME,
  },
  images: {
    domains: ['179.61.188.39', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
