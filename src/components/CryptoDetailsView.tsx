import { ImgWithFallback } from "@/components/ImgWithFallback"
import Link from "next/link"
import type { CryptoDetails } from "@/types"

import { formatCurrency, formatPercentage } from "@/utils/formatters"

export const CryptoDetailView = ({
	name,
	symbol,
	image,
	market_data: {
		current_price,
		market_cap,
		circulating_supply,
		total_supply,
		price_change_percentage_24h
	},
	description
}: CryptoDetails) => {
	return (
		<div className='max-w-2xl mx-auto p-6'>
			<Link href='/crypto' className='text-blue-600 hover:underline'>
				← Back to list
			</Link>
			<div className='flex items-center gap-4'>
				<ImgWithFallback
					src={image.large}
					fallbackSrc='/placeholder.png'
					alt={name}
					width={64}
					height={64}
				/>
				<div>
					<h1 className='text-2xl font-bold'>{name}</h1>
					<p className='uppercase text-gray-500'>{symbol}</p>
				</div>
			</div>

			<div className='mt-4 space-y-2'>
				<p>Price: {formatCurrency(current_price.usd)}</p>
				<p>Market Cap: {formatCurrency(market_cap.usd)}</p>
				<p>Circulating Supply: {circulating_supply.toLocaleString()}</p>
				<p>
					Total Supply: {total_supply ? total_supply.toLocaleString() : "N/A"}
				</p>
				<p
					className={`font-semibold ${
						price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"
					}`}
				>
					24h Change: {formatPercentage(price_change_percentage_24h)}
				</p>
			</div>
			{description?.en && description.en.trim() !== "." && (
				<div className='mt-6'>
					<h2 className='text-lg font-medium'>Description</h2>
					<p className='text-sm text-gray-700 mt-2'>
						{description.en.split(".")[0].trim() + "."}
					</p>
				</div>
			)}
		</div>
	)
}
