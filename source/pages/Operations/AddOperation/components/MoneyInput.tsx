import React from 'react'
import { StyleSheet, Text, View, TextInput,  } from 'react-native'
import colors from './../../../../utils/colors';

interface Props {
	setMoneyCount: (num: string) => void
	moneyCount: string
}

const MoneyInput = ({moneyCount, setMoneyCount}: Props) => {

	return (
		<View style={styles.container}>
			<TextInput
				value={moneyCount}
				keyboardType='number-pad'
				autoFocus
				clearTextOnFocus
				onChangeText={(t) => setMoneyCount(t)}
				style={styles.textInput}
			/>
			<Text style={styles.rub}>RUB</Text>
		</View>
	)
}

export default MoneyInput

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		marginLeft: 10,
		color: colors.white,
		fontSize: 28,
		textAlign: 'center',
		width: 125,
		borderColor: colors.primary,
		borderBottomWidth: 2,
	},
	rub: {
		marginLeft: 10,
		fontSize: 25,
		color: colors.primary,
	},
})
