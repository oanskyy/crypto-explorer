// CoinGecko’s formatting
export function formatCurrency(
	value: number,
	locale = "en-US",
	currency = "USD"
): string {
	if (typeof value !== "number" || isNaN(value)) return "$0"

	if (value < 1) {
		// Show up to 6 decimals for small values, but minimum 2
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency,
			minimumFractionDigits: 2,
			maximumFractionDigits: 6
		}).format(value)
	} else if (value < 10) {
		// Always 2 decimals for values between 1 and 10
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(value)
	} else {
		// For 10 and above, drop decimals if zero, else 2 decimals
		const isInteger = Number.isInteger(value)
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency,
			minimumFractionDigits: isInteger ? 0 : 2,
			maximumFractionDigits: 2
		}).format(value)
	}
}

/**
 * Format a number as a percentage string with 2 decimals.
 * Example: 0.1234 => "12.34%"
 * The input is expected in percentage form (e.g., 12.34 for 12.34%)
 */
export function formatPercentage(value: number, decimals = 2): string {
	if (typeof value !== "number" || isNaN(value)) return "0%"

	return `${value.toFixed(decimals)}%`
}
