const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_DOMAIN: process.env.BACKEND_APP_DOMAIN_NAME,
  },
};

module.exports = nextConfig;
