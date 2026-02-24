import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { routing } from '@/i18n/routing'
import { buildMetadata } from '@/lib/seo/buildMetadata'
import ClientProvider from '@/providers/clientProvider'
import type { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from 'next-intl/server'
import { Montserrat, Roboto } from 'next/font/google'
import NotFound from '../not-found'
import './globals.css'

export const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin', 'cyrillic'],
})

export const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin', 'cyrillic'],
})

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'Metadata.MainPage' })

	return buildMetadata({
		title: t('title'),
		description: t('description'),
		locale: locale,
		path: '',
		image: '/uploads/TAES_logo_c73d688742.svg',
	})
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
