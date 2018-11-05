import React, { useState, useContext } from 'react'
import { StoreContext } from '../ContextStore'
import { addItem } from '../utils/webStorage'
import randomID from '../utils/randomID'

import MainLayout from '../layouts/MainLayout'
import ColorsContainer from '../components/color/ColorsContainer'
import SaveColorModal from '../components/SaveColorModal'

const Home = ({ path }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const store = useContext(StoreContext)
	const colors = Object.values(store.store.palette)

	const handleSave = titleInput => e => {
		const rawColors = colors.map(({ hex, name }) => ({ hex, name }))
		addItem({
			id: randomID(),
			title: titleInput.current.value,
			colors: rawColors
		})
		setIsModalOpen(false)
	}
	const toggleModal = e => {
		setIsModalOpen(!isModalOpen)
	}
	const toggleLock = e => {
		let dataID = e.currentTarget.getAttribute('data-id')
		store.dispatch({ type: 'TOGGLE_LOCK', id: dataID })
	}
	const generateColors = e => {
		store.dispatch({ type: 'GENERATE_COLORS' })
	}

	return (
		<MainLayout
			path={path}
			toggleModal={toggleModal}
			generateColors={generateColors}
		>
			<ColorsContainer colors={colors} toggleLock={toggleLock} />
			{isModalOpen && (
				<SaveColorModal
					colors={colors}
					closeModal={toggleModal}
					confirmModal={handleSave}
				/>
			)}
		</MainLayout>
	)
}

export default React.memo(Home)
