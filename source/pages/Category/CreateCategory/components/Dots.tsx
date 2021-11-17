import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from './../../../../utils/colors';

interface Props {
	count: number;
	activePage: number;
}

const Dots = ({count, activePage}: Props) => {
	const ar = Array.apply(null, Array(count))

	return (
		<View style={styles.container}>
			{
				ar.map((_ ,idx) => {
					return (
						<View key={idx} style={{
							backgroundColor: activePage == idx? colors.primary : colors.grey,
							width: 10,
							height: 10,
							marginHorizontal: 5,
							borderRadius: 10/2,
						}} />
					)
				})
			}
		</View>
	)
}

export default Dots

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 10,
		justifyContent: 'center'
	}
})
