/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "metadata.ens.domains",
			},
			{
				protocol: "https",
				hostname: "**.seadn.io",
			},
			{
				protocol: "https",
				hostname: "**.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "**.unsplash.com",
			},
		],
	},
};

export default nextConfig;
