const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'ru', 'tr', 'kg'],
    defaultLocale: 'ru',
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
