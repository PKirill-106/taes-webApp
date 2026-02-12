import { ICertButtons } from '@/types/interfacesProps'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CertButtons(props: ICertButtons) {
	return (
		<div className='flex justify-end gap-3 pr-4'>
			<button
				onClick={() => props.swiperRef.current?.slidePrev()}
				disabled={props.isBeginning}
				className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300
              ${
								props.isBeginning
									? 'border-gray-200 text-gray-300 pointer-events-none'
									: 'border-gray-300 text-gray-600 hover:bg-gray-100'
							}`}
			>
				<ChevronLeft size={22} />
			</button>

			<button
				onClick={() => props.swiperRef.current?.slideNext()}
				disabled={props.isEnd}
				className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300
              ${
								props.isEnd
									? 'border-gray-200 text-gray-300 pointer-events-none'
									: 'border-primary text-primary hover:bg-primary/10'
							}`}
			>
				<ChevronRight size={22} />
			</button>
		</div>
	)
}
