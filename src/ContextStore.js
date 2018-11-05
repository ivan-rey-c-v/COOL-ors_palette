import React, { createContext, useReducer } from 'react'
import getRandomItems from './utils/getRandomItems'
import crayolaColors from './utils/crayolaColors'

export const StoreContext = createContext()

const initialState = {
	palette: null,
	colorSets: []
}

function reducer(state, action) {
	switch (action.type) {
		case 'INIT_PALETTE': {
			let count = 8
			let palette = {}
			let colors = getRandomItems(count, crayolaColors)

			for (let i = 0; i < count; i++) {
				let id = `palette-${i}`
				palette[id] = {
					...colors[i],
					id,
					isLocked: false
				}
			}
			return { ...state, palette }
		}

		case 'GENERATE_COLOR': {
			//
			return
		}

		case 'TOGGLE_LOCK': {
			return {
				...state,
				palette: {
					...state.palette,
					[action.id]: {
						...state.palette[action.id],
						isLocked: !state.palette[action.id].isLocked
					}
				}
			}
		}

		default: {
			return state
		}
	}
}

export const StoreProvider = ({ children }) => {
	const [store, dispatch] = useReducer(reducer, initialState, {
		type: 'INIT_PALETTE'
	})

	const value = {
		store,
		dispatch
	}

	return (
		<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
	)
}
