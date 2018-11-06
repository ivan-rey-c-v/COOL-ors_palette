const storageName = 'palettes'

export function setList(list) {
	let stringedList = JSON.stringify(list)
	localStorage.setItem(storageName, stringedList)
}

export function getList() {
	let stringedList = localStorage.getItem(storageName)

	return stringedList ? JSON.parse(stringedList) : []
}

export function removeItem(id) {
	let list = getList()
	let newList = list.filter(set => set.id !== id)

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
