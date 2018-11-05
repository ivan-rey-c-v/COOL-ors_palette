import React from 'react'
import ColorSet from './ColorSet'

import styled from 'styled-components'

const Container = styled.div`
	align-self: center;
	height: auto;
	max-width: 1200px;
	padding-top: 1rem;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;

	> div {
		margin: 0.75rem;
	}
`

const palettes = {
	'title-1': [
		{
			name: 'red',
			hex: 'red'
		},
		{
			name: 'blue',
			hex: 'blue'
		},
		{
			name: 'yellow',
			hex: 'yellow'
		},
		{
			name: 'firebrick',
			hex: 'firebrick'
		},
		{
			name: 'green',
			hex: 'green'
		},
		{
			name: 'orange',
			hex: 'orange'
		},
		{
			name: 'teal',
			hex: 'teal'
		},
		{
			name: 'crimson',
			hex: 'crimson'
		},
		{
			name: 'gray',
			hex: 'gray'
		}
	],
	'title-2': [
		{
			name: 'red',
			hex: 'red'
		},
		{
			name: 'blue',
			hex: 'blue'
		},
		{
			name: 'yellow',
			hex: 'yellow'
		},
		{
			name: 'firebrick',
			hex: 'firebrick'
		},
		{
			name: 'green',
			hex: 'green'
		},
		{
			name: 'orange',
			hex: 'orange'
		},
		{
			name: 'teal',
			hex: 'teal'
		},
		{
			name: 'crimson',
			hex: 'crimson'
		},
		{
			name: 'gray',
			hex: 'gray'
		}
	],
	'title-3': [
		{
			name: 'red',
			hex: 'red'
		},
		{
			name: 'blue',
			hex: 'blue'
		},
		{
			name: 'yellow',
			hex: 'yellow'
		},
		{
			name: 'firebrick',
			hex: 'firebrick'
		},
		{
			name: 'green',
			hex: 'green'
		},
		{
			name: 'orange',
			hex: 'orange'
		},
		{
			name: 'teal',
			hex: 'teal'
		},
		{
			name: 'crimson',
			hex: 'crimson'
		},
		{
			name: 'gray',
			hex: 'gray'
		}
	],
	'title-4': [
		{
			name: 'red',
			hex: 'red'
		},
		{
			name: 'blue',
			hex: 'blue'
		},
		{
			name: 'yellow',
			hex: 'yellow'
		},
		{
			name: 'firebrick',
			hex: 'firebrick'
		},
		{
			name: 'green',
			hex: 'green'
		},
		{
			name: 'orange',
			hex: 'orange'
		},
		{
			name: 'teal',
			hex: 'teal'
		},
		{
			name: 'crimson',
			hex: 'crimson'
		},
		{
			name: 'gray',
			hex: 'gray'
		}
	]
}

const PalettesContainer = props => {
	const entries = Object.entries(palettes)

	console.log(entries.length)

	return (
		<Container>
			{entries.map(([title, colors], index) => {
				//
				return (
					<ColorSet
						colors={colors}
						title={title}
						key={`${title}-${index}`}
					/>
				)
			})}
		</Container>
	)
}

export default React.memo(PalettesContainer)
