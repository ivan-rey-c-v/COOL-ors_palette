import React from 'react'
import MainHeader from '../components/header/MainHeader'
import styled from 'styled-components'

const Main = styled.main`
	height: auto;
	width: 100%;

	display: flex;
	flex-direction: column;
`

const MainLayout = props => {
	return (
		<Main>
			<MainHeader
				path={props.path}
				toggleModal={props.toggleModal}
				handleSave={props.handleSave}
				generateColors={props.generateColors}
			/>
			{props.children}
		</Main>
	)
}

export default React.memo(MainLayout)
