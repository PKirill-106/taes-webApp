import { IMap } from "@/types/interfacesProps"

export default function Map(props: IMap) {
	const mapSrc =
		'https://www.google.com/maps/d/embed?mid=1-Yl4H6u6ml_4D0aALfPs1qJ-CHBAbzY&ehbc=2E312F'

	return (
		<div className={`flex-3 w-full overflow-hidden rounded-lg border border-light-border shadow-sm ${props.className}`}>
			<iframe
				src={mapSrc}
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
