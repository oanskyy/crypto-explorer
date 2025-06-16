import { notFound } from "next/navigation"
import { getCryptoById } from "@/lib/crypto"
import { CryptoDetailView } from "@/components/CryptoDetailsView"
import type { CryptoDetailsPageParams } from "@/types"
import type { Metadata } from "next"

export async function generateMetadata({
	params
}: CryptoDetailsPageParams): Promise<Metadata> {
	// asynchronous access of `params.id`
	const { id } = await params
	if (!id || typeof id !== "string") {
		return {
			title: "Cryptocurrency Not Found",
			description: "This cryptocurrency could not be found."
		}
	}

	const data = await getCryptoById(id)

	if (!data) {
		return {
			title: "Cryptocurrency Not Found",
			description: "This cryptocurrency could not be found."
		}
	}

	return {
		title: `${data.name} (${data.symbol.toUpperCase()}) – Live Price & Stats`,
		description: `Get live price, market cap, and more for ${
			data.name
		} (${data.symbol.toUpperCase()}).`,
		openGraph: {
			title: `${data.name} – Crypto Details`,
			description: `Live data for ${data.name}. See price charts, volume, market cap, and more.`,
			images: [data.image?.large || "/og-default.png"]
		},
		twitter: {
			card: "summary_large_image",
			title: `${data.name} – Crypto Overview`,
			description: `Explore key stats and market data for ${data.name}.`,
			images: [data.image?.large || "/og-default.png"]
		}
	}
}

export default async function CryptoDetailsPage({
	params
}: CryptoDetailsPageParams) {
	const { id } = await params
	if (!id || typeof id !== "string") return notFound()

	const data = await getCryptoById(id)
	if (!data) return notFound()

	return <CryptoDetailView {...data} />
}
