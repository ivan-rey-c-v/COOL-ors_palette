import React from 'react'

import { ReactComponent as UnlockSVG } from '../../icons/unlock.svg'
import { ReactComponent as LockSVG } from '../../icons/lock.svg'

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
		font-size: 0.85rem;
		font-weight: 600;
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
	const Icon = props.isLocked ? LockSVG : UnlockSVG

	return (
		<Div>
			<span className="lock">
				<Icon />
			</span>
			<ColorBox color={props.hex} />
			<span className="name"> {props.name} </span>
			<span className="hex">{props.hex}</span>
		</Div>
	)
}

export default ColorCard
