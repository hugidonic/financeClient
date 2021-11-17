import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
	
}

const ContactUsScreen = (props: Props) => {
	return (
		<View style={styles.container}>
			<Text>ContactUsScreen</Text>
		</View>
	)
}

export default ContactUsScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
