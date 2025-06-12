import type { PaginationProps } from "@/types"

export const Pagination = ({
	page,
	onPrev,
	onNext,
	isNextDisabled = false,
	isPrevDisabled = false
}: PaginationProps) => {
	return (
		<div className='flex gap-4 items-center justify-center'>
			<button
				onClick={onPrev}
				disabled={isPrevDisabled}
				className='px-4 py-2 rounded bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition'
			>
				← Prev
			</button>
			<span>Page {page}</span>
			<button
				onClick={onNext}
				disabled={isNextDisabled}
				className='px-4 py-2 rounded bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition'
			>
				Next →
			</button>
		</div>
	)
}
