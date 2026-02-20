import Navbar from '@/components/layout/Navbar'
import { routing } from '@/i18n/routing'
import ClientProvider from '@/providers/clientProvider'
import type { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import NotFound from '../not-found'
import './globals.css'
import Footer from '@/components/layout/Footer'
import { Montserrat, Roboto } from 'next/font/google'

export const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin', 'cyrillic'],
})

export const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
	title: {
		template: '%s | TAES',
		default: 'TAES — Оцінка майна та моніторинг застави',
	},
	description:
		'Компанія TAES — професійна незалежна оцінка нерухомості, обладнання та моніторинг заставного майна для банків.',
	keywords: ['оцінка майна', 'моніторинг застави', 'незалежна оцінка', 'ТАЕС'],
	openGraph: {
		title: 'TAES — Професійна оцінка майна',
		description: 'Експертний підхід до оцінки активів та моніторингу застави.',
		url: 'https://taes.com.ua',
		siteName: 'TAES',
		images: [
			{
				url: '/uploads/TAES_logo_c73d688742.svg',
				width: 800,
				height: 600,
			},
		],
		locale: 'uk_UA',
		type: 'website',
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
			<head>
				<link
					rel='icon'
					href='@/icon.svg'
					type='image/<generated>'
					sizes='<generated>'
				/>
			</head>
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
