export interface PaginationQueryParams {
	page?: number
	perPage?: number
}

export type PaginationProps = {
	page: number
	onPrev: () => void
	onNext: () => void
	isNextDisabled?: boolean
}