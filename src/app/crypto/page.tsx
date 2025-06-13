"use client"
import { useCallback, useState } from "react"
import { useCryptoList } from "@/hooks/useCryptoList"
import { CryptoCard } from "@/components/CryptoCard"
import { Pagination } from "@/components/Pagination"
import Link from "next/link"

const PER_PAGE = 10

export default function Crypto() {
	const [page, setPage] = useState(1)
	const { data, error } = useCryptoList({ page, perPage: PER_PAGE })

	const handleNext = useCallback(() => {
		if (data && data.length === PER_PAGE) {
			setPage(prev => prev + 1)
		}
	}, [data])

	const handlePrev = useCallback(() => {
		setPage(prev => Math.max(prev - 1, 1))
	}, [])

	const isPrevDisabled = page === 1
	const isNextDisabled = !data || data.length < PER_PAGE

	if (error) {
		return (
			<div className='text-center text-red-600 p-4 bg-red-100 rounded'>
				Failed to load data. Please try again.
			</div>
		)
	}
	if (!data || data.length === 0) return <div>No data available</div>

	return (
		<div className='grid items-center justify-items-center min-h-screen p-8  md:p-20 pb-20 gap-8 '>
			<main className='flex flex-col gap-[32px] items-center '>
				<span className='flex flex-col items-center gap-2'>
					<h1 className='text-2xl font-bold'>Cryptocurrency List</h1>
					<p className='text-gray-600'>
						Explore the latest cryptocurrencies and their market data.
					</p>
				</span>
				<ul className='flex flex-col gap-2'>
					{data.map(coin => (
						<Link href={`/crypto/${coin.id}`} key={coin.id}>
							<CryptoCard coin={coin} />
						</Link>
					))}
				</ul>
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
