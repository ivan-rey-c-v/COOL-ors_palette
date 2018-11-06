import React from 'react'
import { Router } from '@reach/router'

import Home from './pages/Home'
import Palettes from './pages/Palettes'
import Error from './pages/Error'

function Routes() {
	return (
		<Router className="App">
			<Home path="/" />
			<Palettes path="/palettes" />
			<Error default />
		</Router>
	)
}

export default React.memo(Routes)
