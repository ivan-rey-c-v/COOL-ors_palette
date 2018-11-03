import React from 'react'

import styled from 'styled-components'

const Main = styled.main`
	height: 100%;
	width: 100%;

	display: flex;
	flex-direction: column;
`

const MainLayout = ({ children }) => {
	return <Main>{children}</Main>
}

export default MainLayout
