import React from 'react'
import { navigate } from '@reach/router'
import Header from '../../layouts/Header'
import COOLors from './COOLors'
import ShuffleItem from './ShuffleItem'
import SaveItem from './SaveItem'

const MainHeader = props => {
	const { path } = props

	const handleNavigatePage = e => {
		const name = e.currentTarget.getAttribute('name')
		navigate(name)
	}

	const inHomePage = path === '/'
	const inPalettesPage = path === '/palettes'

	return (
		<Header>
			<Header.Container>
				<Header.Item
					name="/"
					active={inHomePage ? 'true' : 'false'}
					onClick={handleNavigatePage}
				>
					<COOLors />
				</Header.Item>
				<Header.Item
					name="/palettes"
					active={inPalettesPage ? 'true' : 'false'}
					onClick={handleNavigatePage}
				>
					<div>Palettes</div>
				</Header.Item>
			</Header.Container>

			{inHomePage && (
				<Header.Container>
					<Header.Item>
						<SaveItem />
					</Header.Item>
					<Header.Item>
						<ShuffleItem />
					</Header.Item>
				</Header.Container>
			)}
		</Header>
	)
}

export default MainHeader
