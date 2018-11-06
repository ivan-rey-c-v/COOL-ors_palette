import getRandomItems from './getRandomItems'
import crayolaColors from './crayolaColors'

export default function generateColors(excludedIndexes = []) {
	let count = 8 - excludedIndexes.length
	return getRandomItems(count, crayolaColors, excludedIndexes)
}
