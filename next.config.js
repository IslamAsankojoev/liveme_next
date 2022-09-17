const nextConfig = {
  reactStrictMode: false,
  env: {
    DOMAIN: process.env.BACKEND_APP_DOMAIN_NAME,
    TOKEN: process.env.REACT_APP_API_TOKEN,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_USERNAME: process.env.NEXTAUTH_USERNAME,
    NEXTAUTH_PASSWORD: process.env.NEXTAUTH_PASSWORD,
  },
};

module.exports = nextConfig;
