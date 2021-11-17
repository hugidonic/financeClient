import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
	
}

const ProfileScreen = (props: Props) => {
	return (
		<View style={styles.container}>
			<Text>ProfileScreen</Text>
		</View>
	)
}

export default ProfileScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
