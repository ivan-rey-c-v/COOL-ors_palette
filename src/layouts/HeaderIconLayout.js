import React from 'react'

import styled from 'styled-components'

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 0.25rem;

	svg {
		margin: 0 auto;
		height: 1rem;
		width: 1rem;
		fill: darkviolet;
	}

	p {
		padding-top: 0.1rem;
		font-size: 0.75rem;
		font-weight: 600;
	}
`

const ShuffleItem = props => {
	return <Div>{props.children}</Div>
}

export default ShuffleItem
