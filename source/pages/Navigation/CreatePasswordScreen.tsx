import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
	
}

const CreatePasswordScreen = (props: Props) => {
	return (
		<View style={styles.container}>
			<Text>CreatePasswordScreen</Text>
		</View>
	)
}

export default CreatePasswordScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
