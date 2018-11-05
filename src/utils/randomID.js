import getRandomNumber from './getRandomNumber'

export default function randomID() {
	let name = 'color-set'
	let numbers = []

	for (let i = 0; i < 3; i++) {
		let n = getRandomNumber(0, 10)
		numbers.push(n)
	}

	return `${name}-${numbers.toString()}-${String.fromCodePoint(...numbers)}`
}
