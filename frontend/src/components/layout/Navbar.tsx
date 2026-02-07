'use client'
import { useGetBannersQuery } from '@/state/banner/bannerApiSlice'
import Logo from '../ui/Logo'
import NavList from './NavList'

export default function Navbar() {
	return (
		<header className='section-container max-w-none md:mb-14'>
			<div className='flex gap-4 justify-between items-center'>
				<div className='flex-1'>
					<Logo type='main' height={60} width={60} />
				</div>
				<nav className='flex-1'>
					<NavList />
					<div className='md:hidden'>{/* <BurgerMenu /> */}</div>
				</nav>
			</div>
		</header>
	)
}
