import React from 'react'
import HeaderItemLayout from '../../layouts/HeaderItemLayout'
import { ReactComponent as SaveSVG } from '../../icons/save.svg'

const ShuffleItem = props => {
	return (
		<HeaderItemLayout>
			<SaveSVG />
			<p>save</p>
		</HeaderItemLayout>
	)
}

export default ShuffleItem
