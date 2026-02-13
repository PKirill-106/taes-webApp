import { Skeleton } from '../ui/skeleton'

const MainSectionSkeleton = () => (
	<>
		<Skeleton className='items-center mx-auto h-6 w-60 mb-6' />
		<div className='flex flex-col-reverse md:flex-row gap-6'>
			<div className='flex-2 space-y-14'>
				<div className='space-y-6'>
					<Skeleton className='h-6 w-full' />
					<Skeleton className='h-6 w-full' />
				</div>
				<div className='space-y-6'>
					<Skeleton className='h-6 w-40' />
					<Skeleton className='h-6 w-40' />
					<Skeleton className='h-6 w-20' />
					<Skeleton className='h-6 w-80' />
				</div>
			</div>
			<Skeleton className='flex-1 aspect-video md:aspect-square' />
		</div>
	</>
)

export function ServiceSkeleton() {
	return (
		<div>
			<MainSectionSkeleton />
		</div>
	)
}
