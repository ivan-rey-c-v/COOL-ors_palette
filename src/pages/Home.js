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

	return (
		<MainLayout path={path} handleSave={handleSave}>
			<ColorsContainer colors={store.store.colors} />
			{isModalOpen && <SaveModal />}
		</MainLayout>
	)
}

export default Home
