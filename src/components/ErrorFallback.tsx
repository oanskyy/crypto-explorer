"use client"

interface ErrorFallbackProps {
	title?: string
	message?: string
	actionLabel?: string
	onClick?: () => void
}

export function ErrorFallback({
	title = "Something went wrong",
	message = "We couldn’t load the data. Please try again.",
	actionLabel = "Retry",
	onClick
}: ErrorFallbackProps) {
	return (
		<div className='min-h-[40vh] flex flex-col justify-center items-center text-center p-6'>
			<h1 className='text-2xl font-semibold mb-4'>{title}</h1>
			<p className='mb-6 text-gray-600'>{message}</p>

			{onClick && (
				<button
					className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
					onClick={onClick}
				>
					{actionLabel}
				</button>
			)}
		</div>
	)
}
