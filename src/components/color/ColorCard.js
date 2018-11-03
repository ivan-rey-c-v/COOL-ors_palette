import React from 'react'

import styled from 'styled-components'

const Div = styled.div`
	display: flex;
	align-items: center;
	height: 2.5rem;
	width: 250px;
	box-shadow: 2px 2px 4px lightgray;

	position: relative;
	.lock {
		position: absolute;
		height: 1.5rem;
		width: 1.5rem;
		background-color: darkgray;
		top: -5px;
		left: -5px;
	}

	.name {
		font-size: 0.85rem;
		flex: 2.5 1 0px;
		padding-left: 0.25rem;
	}
	.hex {
		flex: 1 1 0px;
		padding-right: 0.25rem;
	}
`

const ColorBox = styled.span`
	flex: 1.75 1 0px;
	height: 100%;

	${props => ({
		backgroundColor: `${props.color}`
	})};
`

const ColorCard = props => {
	return (
		<Div>
			<span className="lock" />
			<ColorBox color={props.hex} />
			<span className="name"> {props.name} </span>
			<span className="hex">{props.hex}</span>
		</Div>
	)
}

export default ColorCard
