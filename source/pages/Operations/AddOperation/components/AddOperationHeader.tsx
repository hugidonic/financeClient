import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from './../../../../utils/colors';
import Feather from 'react-native-vector-icons/Feather'
import {OperationChooseType} from '../../../../redux/reduxTypes'
import {useNavigation} from '@react-navigation/core'

interface Props {
	setType: (type: OperationChooseType) => void
}

const AddOperationsHeader = ({setType}: Props) => {

	const nav = useNavigation()
	
	return (
		<View style={styles.container}>
			<View style={styles.upper}>
				<Pressable style={{position: 'absolute', left: 0}} onPress={() => nav.goBack()}>
					<Feather name='arrow-left' size={35} color={colors.white} />
				</Pressable>
				<Text style={{color: '#fff', fontSize: 20}}>Добавление операции</Text>
			</View>

			<View style={styles.buttons} >
				<TouchableOpacity onPress={() => setType('Расходы')} >
					<View >
						<Text style={styles.btnText}>РАСХОДЫ</Text>
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={() => setType('Доходы')} >
					<View >
						<Text style={styles.btnText}>ДОХОДЫ</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default AddOperationsHeader

const styles = StyleSheet.create({
	container: {
		height: 125,
		backgroundColor: colors.backgroundBlue,
		borderBottomRightRadius: 40,
		borderBottomLeftRadius: 40,
		paddingHorizontal: 20,
		paddingTop: 30,
		paddingBottom: 20,

		justifyContent: 'space-between',
	},
	upper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: "center",
	},
	btnText: {
		fontSize: 20,
		color: colors.white
	},
})
