// inclusive to min
// exclusive to max

function getRandomNumber(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}

export default getRandomNumber
