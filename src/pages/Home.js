import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import ColorsContainer from '../components/color/ColorsContainer'
import SaveModal from '../components/SaveModal'

const Home = ({ path }) => {
	const [colors, setColors] = useState([
		{ name: 'super blue', hex: '#2e4567' },
		{ name: 'red', hex: '#56Ee13' },
		{ name: 'highlight-green', hex: '#56Ee13' },
		{ name: 'super blue', hex: '#4567E5' },
		{ name: 'super crimson', hex: '#e41c55' },
		{ name: 'super blue', hex: '#2e4567' },
		{ name: "Purple Mountain's Majesty", hex: '#9D81BA' },
		{ name: 'super blue', hex: '#2e4567' }
	])

	const [isModalOpen, setIsModalOpen] = useState(false)

	const url = 'https://gist.github.com/jjdelc/1868136'
	console.log(url)

	fetch(url, {
		mode: 'cors'
	})
		.then(data => data.json())
		.then(json => console.log('crayola json', { json }))

	const handleSave = e => {
		console.log(e.currentTarget)
		console.log({ isModalOpen })
		setIsModalOpen(!isModalOpen)
	}

	return (
		<MainLayout path={path} handleSave={handleSave}>
			<ColorsContainer colors={colors} />
			{isModalOpen && <SaveModal />}
		</MainLayout>
	)
}

export default Home
