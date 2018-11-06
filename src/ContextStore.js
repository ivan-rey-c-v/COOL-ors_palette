import React, { createContext, useReducer } from 'react'
import generateColors from './utils/generateColors'
import { addItem, getList, removeItem } from './utils/webStorage'
import randomID from './utils/randomID'

export const StoreContext = createContext()

const initialState = {
	palette: [],
	colorSets: getList()
}

function reducer(state, action) {
	switch (action.type) {
		case 'GENERATE_COLORS': {
			let excludes = state.palette.reduce(
				(accum, color, index) => {
					// color has indexID added from generateColors
					if (color.isLocked) {
						accum.id.push(color.indexID)
						accum.pos.push(index)
					}
					return accum
				},
				{
					id: [],
					pos: []
				}
			)
			let colors = generateColors(excludes.id)
			let palette

			// position locked colors and add new colors
			if (colors.length < 8) {
				palette = []
				for (let index = 0; index < 8; index++) {
					// includes in excludes ? :-)
					if (excludes.pos.includes(index)) {
						// use colors in excludes (colors.isLocked === true)
						let color = state.palette[index]
						palette.push(color)
					} else {
						let newColor = colors.shift()
						palette.push(newColor)
					}
				}
			} else {
				palette = colors
			}
			return { ...state, palette }
		}

		case 'TOGGLE_LOCK': {
			let indexID = Number(action.indexID)

			let palette = state.palette.map(color => {
				if (indexID === color.indexID) {
					color.isLocked = !color.isLocked
				}
				return color
			})
			return { ...state, palette }
		}

		case 'ADD_ITEM': {
			let rawColors = action.colors.map(({ hex, name }) => ({
				hex,
				name
			}))
			let colorSets = addItem({
				id: randomID(),
				title: action.title,
				colors: rawColors
			})
			// set isLocked = false
			let palette = state.palette.map(color => {
				color.isLocked = false
				return color
			})
			return { palette, colorSets }
		}

		case 'REMOVE_ITEM': {
			const colorSets = removeItem(action.id)
			return { ...state, colorSets }
		}

		default: {
			return state
		}
	}
}

export const StoreProvider = ({ children }) => {
	const [store, dispatch] = useReducer(reducer, initialState, {
		type: 'GENERATE_COLORS'
	})

	const value = {
		store,
		dispatch
	}

	return (
		<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
	)
}
