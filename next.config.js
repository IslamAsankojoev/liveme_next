const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_DOMAIN: process.env.BACKEND_APP_DOMAIN_NAME,
  },
  i18n: {
    locales: ['en', 'tr', 'ru', 'kg'],
    defaultLocale: 'ru',
  },
};

module.exports = nextConfig;
