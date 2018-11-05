// difference of two arrays of ojbects

function diffArrayOfObj(array, excludedList) {
	//
	return array.filter(
		item =>
			!excludedList.some(excluded => {
				/** item and excluded (both objects) should match even with different <Reference>
				 *	filter them OUT if matched
				 *  JSON.stringify does not match objects with diff key positions
				 */
				return JSON.stringify(excluded) === JSON.stringify(item)
			})
	)
}

export default diffArrayOfObj
