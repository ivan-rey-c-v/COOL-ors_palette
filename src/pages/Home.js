import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import ColorsContainer from '../components/color/ColorsContainer'

const Home = ({ path }) => {
	const [colors, setColors] = useState([
		{ name: 'super blue', hex: '#2e4567' },
		{ name: 'red', hex: '#56Ee13' },
		{ name: 'highlight-green', hex: '#56Ee13' },
		{ name: 'super blue', hex: '#2e4567' },
		{ name: 'super blue', hex: '#2e4567' },
		{ name: 'super blue', hex: '#2e4567' },
		{ name: 'super blue', hex: '#2e4567' },
		{ name: 'super blue', hex: '#2e4567' }
	])

	return (
		<MainLayout path={path}>
			<ColorsContainer colors={colors} />
		</MainLayout>
	)
}

export default Home
