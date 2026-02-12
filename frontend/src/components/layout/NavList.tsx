import { useMessages, useTranslations } from 'next-intl'
import LocaleSwitcher from '../LocaleSwitcher'
import Link from 'next/link'
import NavServices from './NavServices'

interface INavList {
	style: string
	showLocaleSwitch: boolean
}

export default function NavList({ style, showLocaleSwitch }: INavList) {
	const t = useTranslations('Navbar')
	const t2 = useTranslations('Footer')

	const messages = useMessages()
	const keys = Object.keys(messages.Navbar)

	return (
		<ul className={style}>
			{keys.map((key, id) => (
				<li key={id}>
					{id === 0 ? (
						<NavServices itemKey={key} showLocaleSwitch={showLocaleSwitch} />
					) : (
						<Link
							href={`/${t(`${key}.slug`)}`}
							className={showLocaleSwitch ? 'hover-active-text' : 'footer-link'}
						>
							{t(`${key}.name`)}
						</Link>
					)}
				</li>
			))}
			<li>
				{showLocaleSwitch ? (
					<LocaleSwitcher />
				) : (
					<Link href='/privacy-policy' className='footer-link'>
						{t2('name')}
					</Link>
				)}
			</li>
		</ul>
	)
}
