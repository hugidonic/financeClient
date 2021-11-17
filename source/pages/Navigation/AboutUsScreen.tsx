import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
	
}

const AboutUsScreen = (props: Props) => {
	return (
		<View style={styles.container}>
			<Text>AboutUsScreen</Text>
		</View>
	)
}

export default AboutUsScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
