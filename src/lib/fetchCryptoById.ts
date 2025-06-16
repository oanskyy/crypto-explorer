import { CryptoDetails } from "@/types"
import { notFound } from "next/navigation"

export async function getCryptoById(id: string): Promise<CryptoDetails | null> {
	try {
		const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
			next: { revalidate: 60 }
		})

		if (!res.ok) {
			if (res.status === 404) notFound()
			throw new Error("Failed to fetch coin details")
		}

		const data: CryptoDetails = await res.json()
		return data
	} catch (e) {
		console.error("Error fetching crypto:", e)
		return null
	}
}
