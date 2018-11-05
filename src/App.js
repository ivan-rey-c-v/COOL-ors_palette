import React, { Component } from 'react'
import Routes from './Routes'
import { StoreProvider } from './ContextStore'

class App extends Component {
	render() {
		return (
			<StoreProvider>
				<Routes />
			</StoreProvider>
		)
	}
}

export default App
