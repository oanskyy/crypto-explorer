"use client"
import Image from "next/image"
import { useState } from "react"
import { useCryptoList } from "@/hooks/useCryptoList"
import { CryptoCard } from "@/components/CryptoCard"
import { Pagination } from "@/components/Pagination"

const PER_PAGE = 10

export default function Crypto() {
	const [page, setPage] = useState(1)
	const { data, isLoading, error } = useCryptoList({ page, perPage: PER_PAGE })

	const handlePrev = () => setPage(prev => Math.max(prev - 1, 1))
	const handleNext = () => setPage(prev => prev + 1)

	const hasNextPage = data && data.length === PER_PAGE

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>
	if (!data || data.length === 0) return <div>No data available</div>

	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				Hello from crypto page!
				<ul className='flex flex-col gap-2'>
					{data.map(coin => (
						<CryptoCard key={coin.id} coin={coin} />
					))}
				</ul>
				<Pagination
					page={page}
					onPrev={handlePrev}
					onNext={handleNext}
					isNextDisabled={!hasNextPage}
				/>
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						aria-hidden
						src='/file.svg'
						alt='File icon'
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						aria-hidden
						src='/window.svg'
						alt='Window icon'
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						aria-hidden
						src='/globe.svg'
						alt='Globe icon'
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	)
}
