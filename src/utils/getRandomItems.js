import getRandomNumber from './getRandomNumber'

function getRandomItems(count, array, excludedIndexes) {
	let items = []
	let indexes = []

	for (let i = 0; i < count; i++) {
		let index = getRandomNumber(0, array.length, [
			...excludedIndexes,
			...indexes
		])
		indexes.push(index)

		// should create new color with new props: indexID, isLocked
		let item = { ...array[index] }
		item.indexID = index
		item.isLocked = false

		items.push(item)
	}

	return items
}

export default getRandomItems
