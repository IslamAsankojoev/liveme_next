const nextConfig = {
  reactStrictMode: false,
  env: {
    DOMAIN: process.env.REACT_APP_DOMAIN_NAME,
    TOKEN: process.env.REACT_APP_API_TOKEN,
  },
};

module.exports = nextConfig;
