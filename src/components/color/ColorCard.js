import React from 'react'

import { ReactComponent as UnlockSVG } from '../../icons/unlock.svg'
import { ReactComponent as LockSVG } from '../../icons/lock.svg'

import styled, { css } from 'styled-components'

const Div = styled.div`
	display: flex;
	align-items: center;
	font-weight: 600;
	width: 310px;

	${props => {
		// used in PalettesPage ColorSet
		if (props.isColorSetItem) {
			return css`
				height: 2rem;
				font-size: 0.75rem;
			`
		}

		// default: used in HomePage ColorsContainer
		return css`
			height: 2.75rem;
			font-size: 1rem;
			box-shadow: 2px 2px 4px #6b476b;
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
		font-size: 0.8rem;
		line-height: 0.8rem;
		width: 35%;
		padding-left: 0.25rem;
		text-align: start;
	}
	.hex {
		width: 25%;
		padding-right: 0.25rem;
		text-align: end;
	}
`

const ColorBox = styled.span`
	width: 40%;
	height: 100%;

	${props => ({
		backgroundColor: `${props.color}`
	})};
`

const ColorCard = props => {
	let IconDiv = null

	if (!props.isColorSetItem) {
		let Icon = props.isLocked ? LockSVG : UnlockSVG
		IconDiv = (
			<span
				className="lock"
				onClick={props.toggleLock}
				data-id={props.indexID}
			>
				<Icon />
			</span>
		)
	}

	return (
		<Div isColorSetItem={props.isColorSetItem}>
			{IconDiv}
			<ColorBox color={props.hex} />
			<span className="name"> {props.name} </span>
			<span className="hex">{props.hex}</span>
		</Div>
	)
}

export default ColorCard
