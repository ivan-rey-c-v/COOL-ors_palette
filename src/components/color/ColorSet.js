import React from 'react'
import ColorCard from './ColorCard'
import { ReactComponent as TrashSVG } from '../../icons/trash.svg'

import styled from 'styled-components'

const Div = styled.div`
	box-shadow: 1px 1px 3px gray;
	width: calc(250px + 1rem);

	.set {
		padding: 0.5rem;
	}

	.title {
		padding: 0.25rem 1rem;
		font-weight: 600;
		display: flex;
		justify-content: space-between;

		svg {
			height: 1rem;
			width: 1rem;
			fill: crimson;
			cursor: pointer;

			:hover {
				fill: blue;
			}

			:active {
				transform: translateY(1px);
			}
		}
	}
`

const ColorSet = ({ title, colors }) => {
	return (
		<Div>
			<div className="set">
				{colors.map(color => (
					<ColorCard {...color} isColorSetItem key={color.name} />
				))}
			</div>
			<div className="title">
				<span>{title}</span>
				<span>
					<TrashSVG />
				</span>
			</div>
		</Div>
	)
}

export default React.memo(ColorSet)
