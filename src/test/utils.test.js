import getRandomNumber from '../utils/getRandomNumber'
import getRandomItems from '../utils/getRandomItems'
import crayolaColors from '../utils/crayolaColors'

import { exclude } from './mocks.js'

describe('getRandomNumber', () => {
	test('should be within range', () => {
		let min = 2
		let max = 15

		for (let i = 0; i < 10; i++) {
			let res = getRandomNumber(min, max)
			// toBeWithin is exclusive to max as with getRandomNumber
			expect(res).toBeWithin(min, max)
		}
	})

	test('should be Not include All items from excludeList', () => {
		let min = 2
		let max = 15
		let excludeNumbers = [3, 4, 5]

		for (let i = 0; i < 10; i++) {
			let res = getRandomNumber(min, max)
			expect(res).not.toIncludeAllMembers(excludeNumbers)
		}
	})
	test('should be Not include ANY items from excludeList', () => {
		let min = 2
		let max = 15
		let excludeNumbers = [3, 4, 5]

		for (let i = 0; i < 10; i++) {
			let res = getRandomNumber(min, max)
			expect(res).not.toIncludeAnyMembers(excludeNumbers)
		}
	})
})

describe('getRandomItems', () => {
	let count = 3

	test('has same length with count', () => {
		for (let i = 0; i <= 10; i++) {
			let res = getRandomItems(count, crayolaColors, exclude)
			expect(res).toHaveLength(count)
		}
	})

	test('not include ANY items in excludeList', () => {
		for (let i = 0; i <= 10; i++) {
			let res = getRandomItems(count, crayolaColors, exclude)
			expect(res).not.toIncludeAnyMembers(exclude)
		}
	})

	test('not include ALL items in excludeList', () => {
		for (let i = 0; i <= 10; i++) {
			let res = getRandomItems(count, crayolaColors, exclude)
			expect(res).not.toIncludeAllMembers(exclude)
		}
	})

	test('to include ANY items in diffArray', () => {
		let diff = diffArrayOfObj(crayolaColors, exclude)

		for (let i = 0; i <= 10; i++) {
			let res = getRandomItems(count, crayolaColors, exclude)
			expect(res).toIncludeAnyMembers(diff)
		}
	})
})
