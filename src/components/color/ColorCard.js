import React from 'react'

import { ReactComponent as UnlockSVG } from '../../icons/unlock.svg'
import { ReactComponent as LockSVG } from '../../icons/lock.svg'

import styled, { css } from 'styled-components'

const Div = styled.div`
	display: flex;
	align-items: center;
	font-weight: 600;
	width: 250px;

	${props => {
		// used in PalettesPage ColorSet
		if (props.isColorSetItem) {
			return css`
				height: 1.25rem;
				font-size: 0.85rem;
			`
		}

		// default: used in HomePage ColorsContainer
		return css`
			height: 2.5rem;
			font-size: 1rem;
			box-shadow: 2px 2px 4px lightgray;
		`
	}};

	position: relative;
	.lock {
		position: absolute;
		top: -5px;
		left: -5px;
		border-radius: 50%;
		height: 1.75rem;
		width: 1.75rem;
		background-color: #fff;
		box-shadow: 0 1px 3px black;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

		:hover {
			background-color: lightcyan;
		}
		:active {
			transform: translateY(1px);
		}

		> svg {
			height: 0.9rem;
			width: 0.9rem;
		}
	}

	.name {
		font-size: 0.75rem;
		width: 40%;
		padding-left: 0.25rem;
		text-align: start;
	}
	.hex {
		width: 30%;
		padding-right: 0.25rem;
		text-align: end;
	}
`

const ColorBox = styled.span`
	width: 30%;
	height: 100%;

	${props => ({
		backgroundColor: `${props.color}`
	})};
`

const ColorCard = ({ isLocked, isColorSetItem, name, hex }) => {
	let IconDiv = null

	if (!isColorSetItem) {
		let Icon = isLocked ? LockSVG : UnlockSVG
		IconDiv = (
			<span className="lock">
				<Icon />
			</span>
		)
	}

	return (
		<Div isColorSetItem={isColorSetItem}>
			{IconDiv}
			<ColorBox color={hex} />
			<span className="name"> {name} </span>
			<span className="hex">{hex}</span>
		</Div>
	)
}

export default ColorCard
