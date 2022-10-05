/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_DOMAIN: process.env.BACKEND_APP_DOMAIN_NAME,
  },
  i18n: {
    locales: ['ru', 'en', 'tr', 'kg'],
    defaultLocale: 'ru',
    localeDetection: false,
  },
  trailingSlash: true,
  swcMinify: true,

  images: {
    domains: ['179.61.188.39', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },
};
module.exports = nextConfig;
