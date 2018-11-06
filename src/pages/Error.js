import React from 'react'
import { Link } from '@reach/router'

import styled from 'styled-components'

const Container = styled.main`
	height: 100%;
	width: 100%;
	padding-top: 5rem;

	display: flex;
	justify-content: center;

	> div {
		width: auto;
		margin: 0 auto;
		font-size: 1.75rem;

		display: flex;
		flex-direction: column;
		align-items: center;

		p {
			text-align: center;
		}

		span {
			margin-top: 2rem;

			a {
				color: darkviolet;

				:hover {
					opacity: 0.75;
				}
			}
		}
	}
`

const Error = props => {
	return (
		<Container>
			<div>
				<h1>
					4
					<span role="img" aria-label="confused emoji">
						😕
					</span>
					4
				</h1>
				<p>Can't seem to find the page.</p>

				<span>
					<Link to="/">Go to Homepage</Link>
				</span>
			</div>
		</Container>
	)
}

export default Error
