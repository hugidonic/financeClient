import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
	
}

const SettingsScreen = (props: Props) => {
	return (
		<View style={styles.container}>
			<Text>SettingsScreen</Text>
		</View>
	)
}

export default SettingsScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
