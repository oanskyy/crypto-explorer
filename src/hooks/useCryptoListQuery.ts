import { useQuery } from "@tanstack/react-query"
import { fetchCryptoList } from "@/lib/fetchCryptoList"

export const useCryptoListQuery = (page = 1, perPage = 10) => {
	return useQuery({
		queryKey: ["cryptos", page, perPage],
		queryFn: () => fetchCryptoList(page, perPage),
		staleTime: 1000 * 60 * 2 // 2 min cache
	})
}
