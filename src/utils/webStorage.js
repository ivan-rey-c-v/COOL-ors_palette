const storageName = 'palettes'

export function setList(list) {
	let stringedList = JSON.stringify(list)
	localStorage.setItem(storageName, stringedList)
}

export function getList() {
	let stringedList = localStorage.getItem(storageName)
	return JSON.parse(stringedList)
}

export function removeItem(item) {
	let list = getList()
	let newList = list.filter(x => x !== item)

	setList(newList)
	return newList
}

export function addItem(item) {
	let list = getList()

	if (!Array.isArray(list)) {
		list = []
	}

	list.push(item)

	setList(list)
	return list
}
