import { IServiceSectionProps } from '@/types/interfacesProps'
import Section from '../ui/Section'

export default function ServiceSection(props: IServiceSectionProps) {
	return (
		<Section className='space-y-8'>
			<h4 className='md:text-center'>{props.section.title}</h4>
			{typeof props.section.content === 'string' ? (
				<p className='small-p md:text-center md:max-w-xl md:mx-auto'>
					{props.section.content}
				</p>
			) : (
				<ol
					className='marker:text-primary list-decimal list-inside flex flex-col md:flex-row md:items-center justify-between font-black'
				>
					{props.section.content.map(item => (
						<li key={item}>{item}</li>
					))}
				</ol>
			)}
		</Section>
	)
}
