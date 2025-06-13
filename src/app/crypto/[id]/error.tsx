"use client"

import { ErrorFallback } from "@/components/ErrorFallback"

export default function Error({
	error,
	reset
}: {
	error: Error
	reset: () => void
}) {
	return (
		<ErrorFallback
			title='Failed to load crypto details'
			message={error.message || "An unexpected error occurred."}
			onClick={reset}
			actionLabel='Try Again'
		/>
	)
}
