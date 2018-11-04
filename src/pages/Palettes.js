import React from 'react'
import MainLayout from '../layouts/MainLayout'
import PalettesContainer from '../components/color/PalettesContainer'

const Home = props => {
	return (
		<MainLayout path={props.path}>
			<PalettesContainer />
		</MainLayout>
	)
}

export default Home
