import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonCard = () => {
	return (
		<li className='flex items-center justify-between p-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-[74px]'>
			{/* Left: coin image + name + symbol */}
			<div className='flex items-center gap-3 min-w-[180px]'>
				<Skeleton className='h-[32px] w-[32px] rounded-full' />
				<div className='flex flex-col gap-2'>
					<Skeleton className='h-[20px] w-[52px] ' />
					<Skeleton className='h-[14px] w-[30px] ' />
				</div>
			</div>

			{/* Center Left: price */}
			<div className='flex items-center gap-2 min-w-[100px]'>
				<Skeleton className='h-[24px] w-[90px] ' />
				<Skeleton className='h-[16px] w-[110px] ' />
				<Skeleton className='h-[20px] w-[50px] ' />
			</div>
		</li>
	)
}
