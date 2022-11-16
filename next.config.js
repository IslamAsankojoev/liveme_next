const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER: process.env.SERVER,
	},
	images: {
		domains: ['localhost', 'livemeshop.com'],
		formats: ['image/avif', 'image/webp'],
		loader: 'custom',
		loaderFile: './helper/imageLoader.js',
	},
	devIndicators: {
		buildActivity: false,
	},
}
module.exports = nextConfig
