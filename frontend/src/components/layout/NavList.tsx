import MyTooltip from '../ui/MyTooltip'

export default function NavList() {
	const navlinkData = ['Home', 'About', 'Services', 'Contact']

	return (
		<ul className='hidden md:flex items-center justify-end gap-5 lg:gap-6'>
			{navlinkData.map(el => (
				<li key={el}>
					<MyTooltip element={<span>{el}</span>} tip={el} />
				</li>
			))}
		</ul>
	)
}
