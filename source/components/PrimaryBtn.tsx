import React from 'react'
import { Pressable, StyleProp, StyleSheet, Text, View } from 'react-native'
import colors from './../utils/colors';

interface Props {
	text: string;
	func: () => void;
	active?: boolean
	newStyle?: StyleProp<any>
}

const PrimaryBtn = ({text, func, newStyle={}, active=false}: Props) => {
	return (
		<Pressable onPress={func} style={[styles.btnContainer, newStyle]}>
			<Text style={{fontSize: 20, fontWeight: '500', opacity: active? 1 : 0.4}}>
				{text}
			</Text>
		</Pressable>
	)
}

export default PrimaryBtn

const styles = StyleSheet.create({
	btnContainer: {
		paddingVertical: 16,
		paddingHorizontal: 32,
		width: 300,
		borderRadius: 30,
		
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primary
	}
})
