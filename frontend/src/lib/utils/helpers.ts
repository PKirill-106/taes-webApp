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
