import { Metadata } from 'next'

type BuildMetadataProps = {
	title: string
	description: string
	locale: string
	path: string
}

export function buildMetadata({
	title,
	description,
	locale,
	path,
}: BuildMetadataProps): Metadata {
	const url = `https://taes.com.ua/${locale}${path}`

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url,
			type: 'website',
		},
		alternates: {
			canonical: url,
			languages: {
				uk: `https://taes.com.ua/uk${path}`,
				en: `https://taes.com.ua/en${path}`,
			},
		},
	}
}
