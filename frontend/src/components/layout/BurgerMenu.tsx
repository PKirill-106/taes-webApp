'use client'
import { Menu, X } from 'lucide-react'
import NavList from './NavList'
import useClickoutside from '@/hooks/useClickOutside'

export default function BurgerMenu() {
	const { isOpen, setIsOpen, ref: menuRef } = useClickoutside()

	return (
		<div ref={menuRef} className='flex justify-end'>
			<Menu
				className='link-size link-hover m-2'
				onClick={() => setIsOpen(!isOpen)}
			/>
			<div
				className={`fixed z-20 top-0 right-0 w-3/4 max-w-xs h-screen bg-white shadow-lg transform transition-transform overflow-y-auto duration-300 md:hidden ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className='p-5 flex flex-col gap-6'>
					<button onClick={() => setIsOpen(false)} className='self-end pr-2'>
						<X className='h-6 w-6' />
					</button>
					<hr />
					<NavList
						showLocaleSwitch={true}
						style='flex flex-col md:hidden gap-8'
					/>
				</div>
			</div>
		</div>
	)
}
