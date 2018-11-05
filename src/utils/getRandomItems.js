import diffArrayOfObj from './diffArrayOfObj'
import getRandomNumber from './getRandomNumber'

function getRandomItems(count, array, excludeList) {
	let indexes = []
	let items = []

	if (excludeList) {
		array = diffArrayOfObj(array, excludeList)
	}

	for (let i = 0; i < count; i++) {
		let index = getRandomNumber(0, count)
		indexes.push(index)

		let item = array[index]
		items.push(item)
	}

	return items
}

export default getRandomItems
