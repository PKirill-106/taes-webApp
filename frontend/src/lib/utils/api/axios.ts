import axios from 'axios'

export const baseURL = process.env.NEXT_PUBLIC_API_URL
console.log(baseURL)
export const api = axios.create({
	baseURL: baseURL,
})
