import Navbar from '@/components/layout/Navbar'
import { routing } from '@/i18n/routing'
import ClientProvider from '@/providers/clientProvider'
import type { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { Montserrat, Roboto } from 'next/font/google'
import NotFound from '../not-found'
import './globals.css'
import Footer from '@/components/layout/Footer'

export const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

export const roboto = Roboto({
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

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		NotFound()
	}

	setRequestLocale(locale)

	const messages = await getMessages()

	return (
		<html>
			<body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
				<NextIntlClientProvider messages={messages}>
					<ClientProvider>
						<div className='min-h-screen flex flex-col'>
							<Navbar />
							<main className='main-section'>{children}</main>
							<Footer />
						</div>
					</ClientProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
