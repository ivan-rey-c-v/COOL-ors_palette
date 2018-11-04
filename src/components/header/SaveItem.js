import React from 'react'
import HeaderIconLayout from '../../layouts/HeaderIconLayout'
import { ReactComponent as SaveSVG } from '../../icons/save.svg'

const ShuffleItem = props => {
	return (
		<HeaderIconLayout>
			<SaveSVG />
			<p>save</p>
		</HeaderIconLayout>
	)
}

export default ShuffleItem
