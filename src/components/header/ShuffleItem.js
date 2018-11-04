import React from 'react'
import HeaderItemLayout from '../../layouts/HeaderItemLayout'
import { ReactComponent as ShuffleSVG } from '../../icons/random.svg'

const ShuffleItem = props => {
	return (
		<HeaderItemLayout>
			<ShuffleSVG />
			<p>shuffle</p>
		</HeaderItemLayout>
	)
}

export default ShuffleItem
