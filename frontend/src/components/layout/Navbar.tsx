import Logo from '../ui/Logo'
import BurgerMenu from './BurgerMenu'
import NavList from './NavList'

export default function Navbar() {
	return (
		<header className='section-container max-w-none md:mb-14'>
			<div className='flex gap-4 justify-between items-center'>
				<div className=''>
					<Logo type='main' height={120} width={120} />
				</div>
				<nav className=''>
					<NavList style='hidden md:flex items-center justify-end gap-5 lg:gap-6 text-heading' />
					<div className='md:hidden'>
						<BurgerMenu />
					</div>
				</nav>
			</div>
		</header>
	)
}
