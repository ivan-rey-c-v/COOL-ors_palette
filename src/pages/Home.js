import React, { useState, useContext } from 'react'
import { StoreContext } from '../ContextStore'

import MainLayout from '../layouts/MainLayout'
import ColorsContainer from '../components/color/ColorsContainer'
import SaveModal from '../components/SaveModal'

const Home = ({ path }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const store = useContext(StoreContext)

	const handleSave = e => {
		setIsModalOpen(!isModalOpen)
	}

	const toggleLock = e => {
		let dataID = e.currentTarget.getAttribute('data-id')
		store.dispatch({ type: 'TOGGLE_LOCK', id: dataID })
	}

	const colors = Object.values(store.store.palette)

	return (
		<MainLayout path={path} handleSave={handleSave}>
			<ColorsContainer colors={colors} toggleLock={toggleLock} />
			{isModalOpen && <SaveModal />}
		</MainLayout>
	)
}

export default React.memo(Home)
