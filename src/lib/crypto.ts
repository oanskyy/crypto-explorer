import { CryptoDetails } from "@/types"

export async function getCryptoById(id: string): Promise<CryptoDetails | null> {
	try {
		const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
			cache: "force-cache"
		})

		if (!res.ok) return null

		const data: CryptoDetails = await res.json()
		return data
	} catch (e) {
		console.error("Error fetching crypto:", e)
		return null
	}
}
