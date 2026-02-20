import { IMap } from '@/types/interfacesProps'

export default function Map(props: IMap) {
	return (
		<div
			className={`flex-3 w-full overflow-hidden rounded-lg border border-light-border shadow-sm ${props.className}`}
		>
			<iframe
				src={props.mapSrc}
				width='100%'
				height='100%'
				style={{ border: 0 }}
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				title='Google Map'
				className='grayscale hover:grayscale-0 transition-all duration-500'
			/>
		</div>
	)
}
