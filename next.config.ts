import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "coin-images.coingecko.com",
				pathname: "/coins/images/**"
			}
		],
		domains: ["coin-images.coingecko.com"]
	}
}

export default nextConfig
