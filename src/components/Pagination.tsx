import type { PaginationProps } from "@/types"

export const Pagination = ({
	page,
	onPrev,
	onNext,
	isNextDisabled
}: PaginationProps) => {
	return (
		<div className='flex items-center justify-center gap-4 mt-8'>
			<button
				onClick={onPrev}
				disabled={page === 1}
				className='px-4 py-2 rounded bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition'
			>
				← Prev
			</button>
			<span className='font-mono text-sm text-gray-600'>Page {page}</span>
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
