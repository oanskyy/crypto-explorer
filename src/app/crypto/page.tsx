"use client"
import Image from "next/image"
import { useCryptoList } from "@/hooks/useCryptoList"

export default function Crypto() {
	const { data, isLoading, error } = useCryptoList()

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>
	if (!data || data.length === 0) return <div>No data available</div>

	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				Hello from crypto page!
				<ul>
					{data?.map(coin => (
						<li key={coin.id}>
							{/* TODO style this crypto card component and extract it */}
							{/* TODO add image */}
							{coin.image}
							<br />
							{/* TODO: parse current price, market cap, price perfcentage */}
							{coin.name} || {coin.symbol} — ${coin.current_price}
							{coin.market_cap}
							<br />
							{coin.price_change_percentage_24h}
						</li>
					))}
				</ul>
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
