import React from 'react'
import MainHeader from '../components/header/MainHeader'
import styled from 'styled-components'

const Main = styled.main`
	height: auto;
	width: 100%;

	display: flex;
	flex-direction: column;
`

const MainLayout = ({ path, children, handleSave, generateColors }) => {
	return (
		<Main>
			<MainHeader
				path={path}
				handleSave={handleSave}
				generateColors={generateColors}
			/>
			{children}
		</Main>
	)
}

export default React.memo(MainLayout)
