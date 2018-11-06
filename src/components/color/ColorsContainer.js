import React from 'react'
import ColorCard from './ColorCard'

import styled from 'styled-components'

const Container = styled.div`
	align-self: center;
	height: 100%;
	max-height: 600px;
	width: 100%;
	min-width: 300px;
	max-width: 800px;
	padding-top: 0.75rem;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;

	> div {
		margin: 0.45rem 0;

		@media screen and (min-width: 500px) {
			margin: 0.55rem 0.75rem;
		}
		@media screen and (min-width: 708px) {
			margin: 1.25rem 0.4rem;
		}
		@media screen and (min-width: 709px) {
			margin: 1.25rem 0.6rem;
		}
		@media screen and (min-width: 720px) {
			margin: 1.5rem 0.75rem;
		}
		@media screen and (min-width: 745px) {
			margin: 1.75rem 1rem;
		}
		@media screen and (min-width: 765px) {
			margin: 2rem 1rem;
		}
	}
`

const ColorsContainer = props => {
	return (
		<Container>
			{props.colors.map((color, index) => {
				return (
					<ColorCard
						{...color}
						key={`${index}-${color}`}
						toggleLock={props.toggleLock}
					/>
				)
			})}
		</Container>
	)
}

export default ColorsContainer
