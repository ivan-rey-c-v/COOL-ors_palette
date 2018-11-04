import React from 'react'
import ColorCard from './color/ColorCard'

import styled from 'styled-components'

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	background-color: rgba(51, 51, 51, 0.85);

	padding: 0.25rem;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Modal = styled.div`
	padding: 0.5rem;
	background-color: white;

	.title-input {
		padding: 1rem 0;

		input {
			font-size: 1rem;
			width: 100%;
			padding: 0.25rem 0.5rem;
			color: inherit;
			border: none;
			border-bottom: 1px solid lightgray;
		}
	}

	.actions {
		padding: 0.25rem 0.25rem;
		display: flex;
		justify-content: space-between;

		button {
			padding: 0.4rem 1.25rem;
			font-weight: 600;
			cursor: pointer;
			letter-spacing: 1px;
			border: none;

			:active {
				transform: scale(0.97);
			}

			&.cancel {
				color: teal;
				background-color: transparent;

				:hover {
					background-color: lightgray;
				}
			}

			&.confirm {
				color: white;
				background-color: teal;

				:hover {
					opacity: 0.9;
				}
			}
		}
	}
`

const colors = [
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

const SaveModal = props => {
	return (
		<ModalWrapper>
			<Modal>
				<div>
					{colors.map(color => (
						<ColorCard {...color} isColorSetItem />
					))}
				</div>
				<div className="title-input">
					<input placeholder="Title" />
				</div>
				<div className="actions">
					<button className="cancel">Cancel</button>
					<button className="confirm">Save color set</button>
				</div>
			</Modal>
		</ModalWrapper>
	)
}

export default SaveModal
