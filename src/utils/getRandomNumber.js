// inclusive to min
// exclusive to max

function getRandomNumber(min, max, excludeList = []) {
	min = Math.ceil(min)
	max = Math.floor(max)
	let n = Math.floor(Math.random() * (max - min)) + min

	if (excludeList.includes(n)) {
		return getRandomNumber(min, max, excludeList)
	}

	return n
}

export default getRandomNumber
