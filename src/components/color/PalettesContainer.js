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

const PalettesContainer = props => {
	return (
		<Container>
			{props.colorSets.map(set => {
				return (
					<ColorSet
						{...set}
						key={set.id}
						removeSet={props.removeSet}
					/>
				)
			})}
		</Container>
	)
}

export default React.memo(PalettesContainer)
