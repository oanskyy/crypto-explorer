import { useEffect, useState } from "react"
import type { Crypto, PaginationQueryParams } from "@/types"
import { COINGECKO_MARKET_URL } from "@/lib/constants"

// This hook fetches a list of cryptocurrencies from the CoinGecko API
// and returns the data, loading state, and any error that occurs during the fetch.
// To use this hook, simply call `useCryptoList()` in your component.

export const useCryptoList = ({
	page = 1,
	perPage = 10
}: PaginationQueryParams = {}) => {
	const [data, setData] = useState<Crypto[] | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const controller = new AbortController()

		const fetchData = async () => {
			setIsLoading(true)
			try {
				const URL = `${COINGECKO_MARKET_URL}&page=${page}&per_page=${perPage}`
				const res = await fetch(URL, { signal: controller.signal })
				if (!res.ok) throw new Error("Failed to fetch cryptos")

				const resData = await res.json()
				console.log("Fetched data:", resData) // Debugging line to check fetched data
				if (!Array.isArray(resData)) {
					throw new Error("Unexpected data format")
				}
				// Type assertion to ensure resData is of type Crypto[]
				// This is a workaround to ensure TypeScript understands the type
				// of the fetched data, but it assumes the API response matches the Crypto type.
				setData(resData as Crypto[])
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message || "Unknown error")
				}
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
		return () => controller.abort() // Cleanup on deps change
	}, [page, perPage])

	return { data, isLoading, error }
}
