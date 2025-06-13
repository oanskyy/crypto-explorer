import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

export default function Loading() {
	return (
		<div className='max-w-2xl mx-auto p-6'>
			<Link href='/crypto' className='text-blue-600 hover:underline'>
				← Back to list
			</Link>
			<div className='flex items-center gap-4'>
				<Skeleton className='h-[64px] w-[64px] rounded-full' />
				<div className='flex flex-col gap-2'>
					<Skeleton className='h-[20px] w-[80px] ' />
					<Skeleton className='h-[14px] w-[50px] ' />
				</div>
			</div>

			<div className='mt-4 space-y-2'>
				<span className='flex gap-2'>
					Price: <Skeleton className='h-[20px] w-[52px] ' />
				</span>
				<span className='flex gap-2'>
					Market Cap: <Skeleton className='h-[20px] w-[200px] ' />
				</span>
				<span className='flex gap-2'>
					Circulating Supply: <Skeleton className='h-[20px] w-[200px] ' />
				</span>
				<span className='flex gap-2'>
					Total Supply: <Skeleton className='h-[20px] w-[200px] ' />
				</span>
				<span className='flex gap-2'>
					24h Change: <Skeleton className='h-[20px] w-[52px] ' />
				</span>
			</div>

			<div className='mt-6 gap-2'>
				<h2 className='text-lg font-medium'>Description</h2>
				<span className='flex flex-col gap-2'>
					<Skeleton className='h-[18px] max-w-10/12' />
					<Skeleton className='h-[18px] max-w-10/12' />
					<Skeleton className='h-[18px] max-w-5/12' />
				</span>
			</div>
		</div>
	)
}
