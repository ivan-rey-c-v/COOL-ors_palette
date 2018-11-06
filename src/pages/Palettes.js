import React, { useContext } from 'react'
import { StoreContext } from '../ContextStore'

import MainLayout from '../layouts/MainLayout'
import PalettesContainer from '../components/color/PalettesContainer'

const Home = props => {
	const store = useContext(StoreContext)

	const removeSet = id => e => {
		store.dispatch({ type: 'REMOVE_ITEM', id })
	}

	return (
		<MainLayout path={props.path}>
			<PalettesContainer
				colorSets={store.store.colorSets}
				removeSet={removeSet}
			/>
		</MainLayout>
	)
}

export default Home
