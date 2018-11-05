import React from 'react'
import HeaderIconLayout from '../../layouts/HeaderIconLayout'
import { ReactComponent as ShuffleSVG } from '../../icons/random.svg'

const ShuffleItem = props => {
	return (
		<HeaderIconLayout>
			<ShuffleSVG />
			<p>generate</p>
		</HeaderIconLayout>
	)
}

export default ShuffleItem
