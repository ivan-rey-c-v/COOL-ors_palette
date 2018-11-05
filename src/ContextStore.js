import React, { createContext, useReducer } from 'react'
import getRandomItems from './utils/getRandomItems'
import crayolaColors from './utils/crayolaColors'

export const StoreContext = createContext()

const initialState = {
	palettes: [],
	colors: []
}

function reducer(state, action) {
	switch (action.type) {
		case 'GENERATE_COLOR': {
			let excludeList = action.excludeList
			let count = excludeList ? 8 - excludeList.length : 8
			let colors = getRandomItems(count, crayolaColors, excludeList)

			return { ...state, colors }
		}

		default: {
			return state
		}
	}
}

export const StoreProvider = ({ children }) => {
	const [store, dispatch] = useReducer(reducer, initialState, {
		type: 'GENERATE_COLOR'
	})

	const value = {
		store,
		dispatch
	}

	return (
		<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
	)
}
