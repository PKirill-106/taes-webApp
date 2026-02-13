import { IStrapiBlock } from '@/types/interfaceApi'
import { ReactNode } from 'react'

export const clearAndFormatPhoneNumber = (
	phone: string,
	removeStart: boolean,
) => {
	let clearNum
	if (phone.startsWith('+38') && removeStart) {
		clearNum = phone.slice(3)
	} else {
		clearNum = phone
	}

	if (removeStart) {
		const match = clearNum.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/)

		if (match) {
			return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`
		}
	} else {
		const match = clearNum.match(/^(\+380)(\d{2})(\d{3})(\d{2})(\d{2})$/)

		if (match) {
			return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`
		}
	}
}
export const formatRichText = (text: string, textColor: string): ReactNode => {
	if (!text) return null

	const parts = text.split(/(<primary>.*?<\/primary>)/g)

	return parts.map((part, index) => {
		if (part.startsWith('<primary>') && part.endsWith('</primary>')) {
			const content = part.replace('<primary>', '').replace('</primary>', '')
			return (
				<span key={index} className={textColor}>
					{content}
				</span>
			)
		}
		return part
	})
}
export const renderPrivacyPolicy = (blocks: IStrapiBlock[]) => {
	if (!blocks) return null

	return blocks.map((block, index) => {
		const content = block.children.map(child => child.text).join('')

		if (!content.trim()) return null

		const isHeading =
			/^\d+\.\s/.test(content) || content === content.toUpperCase()

		if (isHeading) {
			return (
				<h2
					key={index}
					className='text-2xl font-bold text-heading mt-10 mb-4 first:mt-0'
				>
					{content}
				</h2>
			)
		}

		if (content.trim().startsWith('•')) {
			return (
				<li
					key={index}
					className='ml-6 list-none flex gap-3 text-gray-700 my-2'
				>
					<span className='text-primary font-bold'>•</span>
					{content.replace('•', '').trim()}
				</li>
			)
		}

		return (
			<p key={index} className='text-gray-700 leading-relaxed mb-4'>
				{content}
			</p>
		)
	})
}
