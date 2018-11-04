import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

const Home = props => {
	return (
		<MainLayout path={props.path}>
			<h1>This is the palletes page!</h1>
		</MainLayout>
	)
}

export default Home
