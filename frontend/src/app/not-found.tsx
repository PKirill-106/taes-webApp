import Link from 'next/link'
import './[locale]/globals.css'
import { montserrat, roboto } from './[locale]/layout'

export default function NotFound() {
	return (
		<html>
			<body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
				<section className='flex h-full items-center justify-center'>
					<div className='text-center py-10 md:py-12'>
						<h1 className='text-7xl font-bold text-primary'>404</h1>
						<p className='mt-5 text-lg'>Сторінку не знайдено</p>
						<Link
							href='/'
							className='mt-6 inline-block text-primary hover:underline active:underline'
						>
							Повернутися на головну
						</Link>
					</div>
				</section>
			</body>
		</html>
	)
}
