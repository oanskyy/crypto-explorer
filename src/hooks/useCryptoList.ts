import { useEffect, useState, useRef, useCallback } from "react"
import type { Crypto, PaginationQueryParams } from "@/types"
import { COINGECKO_MARKET_URL_USD } from "@/lib/constants"

export const useCryptoList = ({
	page = 1,
	perPage = 10
}: PaginationQueryParams = {}) => {
	const [data, setData] = useState<Crypto[] | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const controllerRef = useRef<AbortController | null>(null)

	const fetchData = useCallback(async () => {
		if (controllerRef.current) {
			controllerRef.current.abort()
		}

		const controller = new AbortController()
		controllerRef.current = controller

		setIsLoading(true)
		setError(null)
		try {
			const URL = `${COINGECKO_MARKET_URL_USD}&page=${page}&per_page=${perPage}`
			const res = await fetch(URL, { signal: controller.signal })
			if (!res.ok) throw new Error("Failed to fetch cryptos")

			const resData = await res.json()
			if (!Array.isArray(resData)) {
				throw new Error("Unexpected data format")
			}
			setData(resData as Crypto[])
		} catch (err: unknown) {
			if (err instanceof Error && err.name === "AbortError") {
				return
			}
			if (err instanceof Error) {
				setError(err.message || "Unknown error")
			}
		} finally {
			setIsLoading(false)
		}
	}, [page, perPage])

	useEffect(() => {
		fetchData()

		return () => {
			controllerRef.current?.abort()
			controllerRef.current = null
		}
	}, [fetchData])

	return { data, isLoading, error, refetch: fetchData }
}
