const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER: process.env.SERVER,
	},
	images: {
		domains: ['localhost', 'livemeshop.com'],
		formats: ['image/avif', 'image/webp'],
	},
	devIndicators: {
		buildActivity: false,
	},
}
module.exports = nextConfig
