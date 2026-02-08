import Logo from '../ui/Logo'
import ContactFooter from './ContactFooter'
import NavList from './NavList'

export default function Footer() {
	const year: number = new Date().getFullYear()

	return (
		<section className='max-w-none bg-primary text-background section p-8'>
			<div className='section-container space-y-6'>
				<Logo type='white' height={120} width={120} />
				<div className='flex flex-col md:flex-row gap-4 md:gap-8 justify-between'>
					<div className='flex flex-col flex-1 gap-6'>
						<ContactFooter />

						<div className='flex items-center gap-4 md:gap-6'></div>
					</div>

					<div className='flex-1 lg:flex-2'>
						<NavList
							showLocaleSwitch={false}
							style='flex flex-col md:grid md:grid-rows-2 gap-6 lg:grid-rows-2 lg:grid-cols-3 lg:grid-flow-col'
						/>
					</div>
				</div>
				<p className='text-xs lg:text-sm xl:text-base text-center mt-15'>
					© {year} TAES - All Rights Reserved
				</p>
			</div>
		</section>
	)
}
