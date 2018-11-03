import React from 'react'

import styled from 'styled-components'

const Div = styled.div`
	font-size: 0.9rem;
	font-weight: 900;
	text-shadow: 1px 1px 4px gray;
`
const Span = styled.span`
	${props => {
		return {
			color: `${props.color}`
		}
	}};
`

const coolors = [
	'purple',
	'yellow',
	'green',
	'blue',
	'crimson',
	'darkviolet',

	'white',
	'white',
	'white'
]

const name = '[COOL]ors'

const COOLors = props => {
	return (
		<Div>
			{[...name].map((char, index) => (
				<Span color={coolors[index]} key={`${char}-${index}`}>
					{char}
				</Span>
			))}
		</Div>
	)
}

export default COOLors
