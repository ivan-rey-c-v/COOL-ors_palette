import React from 'react'
import { Router } from '@reach/router'

import Home from './pages/Home'
import Palettes from './pages/Palettes'

function Routes() {
	return (
		<Router className="App">
			<Home path="/" />
			<Palettes path="/palettes" />
		</Router>
	)
}

export default Routes
