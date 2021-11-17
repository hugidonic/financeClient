import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { OperationType } from '../../../../redux/reduxTypes'
import colors from './../../../../utils/colors';

interface Props {
	item: OperationType
}

const OperationItem = ({item}: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				{/* TODO: MAKE ICON */}
				<View style={[styles.icon, {backgroundColor: item.choosenCategory.color}]} />
				<Text style={{ color: colors.white, fontSize: 20 }}>{item.choosenCategory.name}</Text>
			</View>
			<View style={styles.right}>
				<Text style={{ color: colors.white, fontSize: 20 }}>{item.moneyCount} ₽</Text>
				{/* TODO: Account name */}
			</View>
		</View>
	)
}

export default OperationItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
	},
	icon: {
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
		marginRight: 10,
	},
	left: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	right: {},
})
