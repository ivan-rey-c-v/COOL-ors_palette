import React from 'react'
import { Router } from '@reach/router'

import Home from './pages/Home'

function Routes() {
	return (
		<Router className="App">
			<Home path="/" />
		</Router>
	)
}

export default Routes
