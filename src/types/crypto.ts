export interface Crypto {
	id: string
	symbol: string
	name: string
	image: string
	current_price: number
	market_cap: number
	market_cap_rank: number
	fully_diluted_valuation: number
	total_volume: number
	high_24h: number
	low_24h: number
	price_change_24h: number
	price_change_percentage_24h: number
	market_cap_change_24h: number
	market_cap_change_percentage_24h: number
	circulating_supply: number
	total_supply: number
	max_supply: number
	ath: number
	ath_change_percentage: number
	ath_date: Date
	atl: number
	atl_change_percentage: number
	atl_date: Date
	roi: null
	last_updated: Date
}

export interface CryptoCardProps {
	coin: Crypto
}
export interface CryptoDetails {
	id: string
	name: string
	symbol: string
	image: { large: string }
	market_data: {
		current_price: { usd: number }
		market_cap: { usd: number }
		total_supply: number
		circulating_supply: number
		price_change_percentage_24h: number
	}
	description: { en: string }
}

export type CryptoDetailsPageParams = {
	params: Promise<{ id: string }>
}