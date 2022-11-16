export default function myImageLoader({ src, width, quality }) {
	return `${src.replace('http://', 'https://')}`
}
