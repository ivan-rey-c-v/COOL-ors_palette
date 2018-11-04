import React from 'react'
import MainHeader from '../components/header/MainHeader'
import styled from 'styled-components'

const Main = styled.main`
	height: auto;
	width: 100%;

	display: flex;
	flex-direction: column;
`

const MainLayout = ({ path, children, handleSave }) => {
	return (
		<Main>
			<MainHeader path={path} handleSave={handleSave} />
			{children}
		</Main>
	)
}

export default MainLayout
