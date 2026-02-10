import Logo from '../ui/Logo'
import BurgerMenu from './BurgerMenu'
import NavList from './NavList'

export default function Navbar() {
	return (
		<header className='section-container py-2 max-w-none md:mb-14'>
			<div className='flex gap-4 justify-between items-center'>
				<div>
					<Logo type='main' height={120} width={120} />
				</div>
				<nav>
					<NavList
						showLocaleSwitch={true}
						style='hidden md:flex items-center justify-end gap-8 lg:gap-10 text-heading text-xs sm:text-sm md:text-base lg:text-lg'
					/>
					<div className='md:hidden'>
						<BurgerMenu />
					</div>
				</nav>
			</div>
		</header>
	)
}
