import { useMessages, useTranslations } from 'next-intl'
import LocaleSwitcher from '../LocaleSwitcher'
import Link from 'next/link'

interface INavList {
	style: string
}

export default function NavList({ style }: INavList) {
	const t = useTranslations('Navbar')

	const messages = useMessages()
	const keys = Object.keys(messages.Navbar)

	return (
		<ul className={style}>
			{keys.map(key => (
				<li key={key}>
					<Link href={`/${t(`${key}.slug`)}`} className='hover-active-text'>
						{t(`${key}.name`)}
					</Link>
				</li>
			))}
			<li>
				<LocaleSwitcher />
			</li>
		</ul>
	)
}
