'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import Logo from '../ui/Logo'
import BurgerMenu from './BurgerMenu'
import NavList from './NavList'

export default function Navbar() {
	const sentinelRef = useRef<HTMLDivElement | null>(null)
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsSticky(!entry.isIntersecting)
			},
			{ threshold: 0.1 },
		)

		if (sentinelRef.current) {
			observer.observe(sentinelRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const NavbarContent = (
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
	)

	return (
		<>
			<header
				ref={sentinelRef}
				className='section-container py-2 max-w-360 md:my-4'
			>
				{NavbarContent}
			</header>

			<AnimatePresence>
				{isSticky && (
					<motion.header
						initial={{ y: -120, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -120, opacity: 0 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
						className='fixed top-0 md:top-4 left-0 right-0 z-20 flex justify-center'
					>
						<div className='w-full max-w-7xl px-6 py-3 rounded-lg bg-white/70 backdrop-blur-xl shadow-xl border border-white/40'>
							{NavbarContent}
						</div>
					</motion.header>
				)}
			</AnimatePresence>
		</>
	)
}
