import type { CryptoCardProps } from "@/types"
import { formatCurrency, formatPercentage } from "@/utils/formatters"
import { ImgWithFallback } from "./ImgWithFallback"

export const CryptoCard = ({ coin }: CryptoCardProps) => {
	const {
		symbol,
		name,
		image,
		current_price,
		market_cap,
		price_change_percentage_24h
	} = coin
	const isPriceUp = price_change_percentage_24h >= 0

	return (
		<li
			aria-label={`${name} cryptocurrency card`}
			className='flex items-center justify-between p-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow'
		>
			{/* Left: coin image + name + symbol */}
			<div className='flex items-center gap-3 min-w-[180px]'>
				<ImgWithFallback
					src={image}
					fallbackSrc='/fallback-coin.svg'
					alt={`${name} logo`}
					width={32}
					height={32}
					style={{ width: 32, height: 32 }}
				/>
				<div>
					<h3 className='font-semibold'>{name}</h3>
					<span className='text-xs text-gray-500 uppercase'>{symbol}</span>
				</div>
			</div>

			{/* Center Left: price */}
			<p className='font-mono text-lg font-semibold min-w-[100px] text-right'>
				{formatCurrency(current_price)}
			</p>

			{/* Center Right: market cap */}
			<p className='text-xs text-gray-500 min-w-[120px] text-right truncate'>
				{formatCurrency(market_cap)}
			</p>

			{/* Right: 24h change with color */}
			<p
				className={`font-mono text-sm font-semibold min-w-[80px] text-right ${
					isPriceUp ? "text-green-600" : "text-red-600"
				}`}
			>
				{formatPercentage(price_change_percentage_24h)}
			</p>
		</li>
	)
}
