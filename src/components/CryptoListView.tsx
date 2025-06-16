"use client"
import Link from "next/link"
import { useCallback, useState } from "react"
import { useCryptoList } from "@/hooks/useCryptoList"
import { CryptoCard } from "@/components/CryptoCard"
import { Pagination } from "@/components/Pagination"
import { ErrorFallback } from "@/components/ErrorFallback"
import { SkeletonCard } from "@/components/SkeletonCard"

const PER_PAGE = 10

export default function CryptoListView() {
	const [page, setPage] = useState(1)
	const { data, isLoading, error, refetch } = useCryptoList({
		page,
		perPage: PER_PAGE
	})

	const handleNext = useCallback(() => {
		if (data && data.length === PER_PAGE) {
			setPage(prev => prev + 1)
			window.scrollTo({ top: 0, behavior: "smooth" })
		}
	}, [data])

	const handlePrev = useCallback(() => {
		setPage(prev => Math.max(prev - 1, 1))
		window.scrollTo({ top: 0, behavior: "smooth" })
	}, [])

	const isPrevDisabled = page === 1
	const isNextDisabled = !data || data.length < PER_PAGE

	if (error) {
		return (
			<ErrorFallback
				title='Failed to load crypto list'
				message={error}
				onClick={() => refetch()}
				actionLabel='Try Again'
			/>
		)
	}

	return (
		<div className='grid items-center justify-items-center min-h-screen p-8  md:p-20 pb-20 gap-8 '>
			<main className='flex flex-col gap-2 items-center '>
				<span className='flex flex-col items-center gap-2'>
					<h1 className='text-2xl font-bold'>Cryptocurrency List</h1>
					<p className='text-gray-600'>
						Explore the latest cryptocurrencies and their market data.
					</p>
				</span>
				{isLoading
					? Array.from({ length: PER_PAGE }).map((_, i) => (
							<SkeletonCard key={i} />
					  ))
					: data?.map(coin => (
							<Link href={`/crypto/${coin.id}`} key={coin.id}>
								<CryptoCard coin={coin} />
							</Link>
					  ))}
				<Pagination
					page={page}
					onNext={handleNext}
					onPrev={handlePrev}
					isNextDisabled={isNextDisabled}
					isPrevDisabled={isPrevDisabled}
				/>
			</main>
		</div>
	)
}
