import { Skeleton } from '../ui/skeleton'

export default function RecommendationSkelet() {
	return (
		<div className='flex-1 flex justify-between gap-6'>
			<div className='relative flex-1 h-70 rounded-lg flex flex-col gap-8'>
				<Skeleton className='h-10 w-20' />
				<>
					<Skeleton className='h-3 w-100' />
					<Skeleton className='h-3 w-100' />
				</>
				<div className='absolute bottom-4 left-0 flex items-center gap-6'>
					<Skeleton className='rounded-full w-20 aspect-square' />
					<div className='space-y-5'>
						<Skeleton className='h-5 w-60' />
						<Skeleton className='h-3 w-60' />
					</div>
				</div>
			</div>
			<div className='flex-1'></div>
		</div>
	)
}
