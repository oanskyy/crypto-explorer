import { COINGECKO_MARKET_URL_USD } from "@/lib/constants"
import type { Crypto } from "@/types"

export async function fetchCryptoList(
	page = 1,
	perPage = 10
): Promise<Crypto[]> {
	const url = `${COINGECKO_MARKET_URL_USD}&page=${page}&per_page=${perPage}`
	const res = await fetch(url)

	if (!res.ok) throw new Error("Failed to fetch cryptos")

	const data = await res.json()
	if (!Array.isArray(data)) {
		throw new Error("Unexpected data format")
	}
	return data
}
