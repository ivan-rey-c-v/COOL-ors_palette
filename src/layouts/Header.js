import React from 'react'

import styled from 'styled-components'

const BaseHeader = styled.header`
	height: 3rem;
	min-height: 3rem;
	box-shadow: 0 0 8px lightgray;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 10;

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
			background-color: #f3f2ff;
			border-bottom: 2px solid crimson;
		}
	}
`

const Header = ({ children }) => {
	return (
		<BaseHeader>
			<nav>{children}</nav>
		</BaseHeader>
	)
}

// trying subcomponents, eg. <Header.Container /> :-)
Header.Container = function itemContainer(props) {
	return (
		<div {...props} className="item-container">
			{props.children}
		</div>
	)
}

Header.Item = function item(props) {
	// use 'true' : 'false' (as string) as react recommendation
	const className = props.active === 'true' ? `item active` : 'item'

	return (
		<div {...props} className={className}>
			{props.children}
		</div>
	)
}

export default Header
