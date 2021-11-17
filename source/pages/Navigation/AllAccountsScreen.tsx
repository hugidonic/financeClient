import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
	
}

const AllAccountsScreen = (props: Props) => {
	return (
		<View style={styles.container}>
			<Text>AllAccountsScreen</Text>
		</View>
	)
}

export default AllAccountsScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
