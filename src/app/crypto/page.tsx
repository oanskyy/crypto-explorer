import CryptoListView from "@/components/CryptoListView"

export async function generateMetadata() {
	return {
		title: "Cryptocurrency List – Explore Latest Prices",
		description: "Latest cryptocurrency prices and market data."
	}
}

export default function CryptoPage() {
	return <CryptoListView />
}
