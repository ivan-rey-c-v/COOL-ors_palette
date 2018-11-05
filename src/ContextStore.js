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

		case 'GENERATE_COLORS': {
			//
			let excludeList = Object.values(state.palette).reduce(
				(accum, color) => {
					if (color.isLocked) {
						const { hex, name } = color
						// SHOULD: position <hex> first before <name>
						// diffArrayOfObj uses JSON.stringify and key position is vital
						accum.push({ hex, name })
					}
					return accum
				},
				[]
			)

			let count = 8 - excludeList.length
			let colors = getRandomItems(count, crayolaColors, excludeList)

			let container = Object.entries(state.palette).reduce(
				(accum, [id, value]) => {
					// id = `palette-${index}`
					// value = {name, hex, isLocked, id:id}
					if (value.isLocked) {
						// Same as prev
						accum.palette[id] = value
						return accum
					} else {
						// Add new color with same ID
						accum.palette[id] = {
							...colors[accum.count],
							id,
							isLocked: false
						}
						accum.count += 1
						return accum
					}
				},
				{
					palette: {},
					count: 0
				}
			)

			// TODO: bug where same colors are generated
			return { ...state, palette: container.palette }
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
