import getRandomNumber from '../utils/getRandomNumber'
import diffArrayOfObj from '../utils/diffArrayOfObj'
import getRandomItems from '../utils/getRandomItems'

import { arr, exclude } from './mocks.js'

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
})

describe('diffArrayOfObj', () => {
	let res = diffArrayOfObj(arr, exclude)

	test('length is the diff lengths of two arrays', () => {
		let size = arr.length - exclude.length
		expect(res).toHaveLength(size)
	})

	test('not include ALL items in excludeList', () => {
		expect(res).not.toIncludeAllMembers(exclude)
	})

	test('not include ANY items in excludeList', () => {
		expect(res).not.toIncludeAnyMembers(exclude)
	})
})

describe('getRandomItems', () => {
	let count = 3

	test('has same length with count', () => {
		for (let i = 0; i <= 10; i++) {
			let res = getRandomItems(count, arr, exclude)
			expect(res).toHaveLength(count)
		}
	})

	test('not include ANY items in excludeList', () => {
		for (let i = 0; i <= 10; i++) {
			let res = getRandomItems(count, arr, exclude)
			expect(res).not.toIncludeAnyMembers(exclude)
		}
	})

	test('not include ALL items in excludeList', () => {
		for (let i = 0; i <= 10; i++) {
			let res = getRandomItems(count, arr, exclude)
			expect(res).not.toIncludeAllMembers(exclude)
		}
	})

	test('to include ANY items in diffArray', () => {
		let diff = diffArrayOfObj(arr, exclude)

		for (let i = 0; i <= 10; i++) {
			let res = getRandomItems(count, arr, exclude)
			expect(res).toIncludeAnyMembers(diff)
		}
	})
})
