'use client'

import { useLocale } from 'next-intl'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { usePathname, useRouter } from '@/i18n/navigation'

const locales = [
	{ value: 'en', label: 'ENG' },
	{ value: 'uk', label: 'UA' },
]

export default function LocaleSwitcher() {
	const locale = useLocale()
	const pathname = usePathname()
	const router = useRouter()

	const handleSwitch = (newLocale: string) => {
		if (newLocale !== locale) {
			router.replace(pathname, { locale: newLocale })
			router.refresh()
		}
	}

	return (
		<Select value={locale} onValueChange={handleSwitch}>
			<SelectTrigger>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{locales.map(l => (
					<SelectItem key={l.value} value={l.value}>
						{l.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
