var path = require('path');

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'en', 'tr', 'kg'],
    defaultLocale: 'ru',
    localeDetection: false,
    localePath: path.resolve('./public/collections'),
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
