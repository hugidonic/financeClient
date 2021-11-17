import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from './../../../../utils/colors';

interface Props {
	
}

const ChooseAccount = (props: Props) => {
	return (
		<View style={styles.container}>
			<Text style={{color: colors.secondary, fontSize: 16}}>
				Счёт
			</Text>
			{/* TODO: choose account */}
			<Text style={{color: colors.primary, fontSize: 18}}>Основной</Text>
		</View>
	)
}

export default ChooseAccount

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
	},
})
