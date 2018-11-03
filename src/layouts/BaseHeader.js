import React from 'react'

import styled from 'styled-components'

const Header = styled.header`
	height: 3rem;
	box-shadow: 0 0 8px lightgray;

	nav {
		margin: 0 auto;
		height: 100%;
		max-width: 800px;

		display: flex;
		justify-content: space-between;
	}

	.item-container {
		display: flex;
	}

	.item {
		height: 100%;
		padding: 0.25rem 0.5rem;
		display: flex;
		align-items: center;
		cursor: pointer;

		:hover {
			background-color: #e9e8fc;
		}

		:active {
			transform: translateY(1px);
		}

		&.active {
			background-color: #f5eaf7;
			border-bottom: 2px solid crimson;
		}
	}
`

const BaseHeader = ({ children }) => {
	return (
		<Header>
			<nav>{children}</nav>
		</Header>
	)
}

// trying subcomponents, eg. <BaseHeader.Container /> :-)
BaseHeader.Container = function itemContainer(props) {
	return (
		<div {...props} className="item-container">
			{props.children}
		</div>
	)
}

BaseHeader.Item = function item(props) {
	// use 'true' : 'false' (as string) as react recommendation
	const className = props.active === 'true' ? `item active` : 'item'

	return (
		<div {...props} className={className}>
			{props.children}
		</div>
	)
}

export default BaseHeader
