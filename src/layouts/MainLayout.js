import React from 'react'
import MainHeader from '../components/header/MainHeader'
import styled from 'styled-components'

const Main = styled.main`
	height: 100%;
	width: 100%;

	display: flex;
	flex-direction: column;
`

const MainLayout = ({ path, children }) => {
	return (
		<Main>
			<MainHeader path={path} />
			{children}
		</Main>
	)
}

export default MainLayout
