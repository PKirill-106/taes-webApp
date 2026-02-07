import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import ClientProvider from '@/providers/clientProvider'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'TAES',
	description: 'TAES ',
	icons: {
		icon: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
				<ClientProvider>
					<Toaster position='top-center' />
					<div className='min-h-screen flex flex-col'>
						<Navbar />
						<main className='main-section'>{children}</main>
						{/* <Footer /> */}
					</div>
				</ClientProvider>
			</body>
		</html>
	)
}
