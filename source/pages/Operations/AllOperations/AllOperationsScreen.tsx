import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import AllOperationsHeader from './components/AllOperationsHeader'
import colors from './../../../utils/colors';
import OperationItem from './components/OperationItem';
import Periods from './../../../components/Periods';
import { InitStateType, OperationType, PeriodsChooseType } from '../../../redux/reduxTypes';
import { connect } from 'react-redux';

interface Props {
	moneyCount: number
	currentAllOperations: OperationType[]
}

const AllOperationsScreen = ({moneyCount, currentAllOperations}: Props) => {
	return (
		<View style={styles.container}>
			<AllOperationsHeader />

			{/* TODO: MAKE CARD COMPONENT */}
			<View style={styles.CardContainer}>
				<Periods />
				<View style={{flexDirection: 'row', marginTop: 40 ,justifyContent: 'space-between'}}>
					<Text style={{color: "#ddd", fontWeight: '700', fontSize: 18}}>Всего: {moneyCount} ₽</Text>
					{/* TODO: SORT BY DATA OR AMOUNT */}
					<Text style={{color: "#777", fontSize: 18}}>По дате</Text>
				</View>

				<View style={{marginTop: 15}}>
					<FlatList 
						data={currentAllOperations}
						renderItem={({item}) => <OperationItem item={item} />}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item) => item.createdAt}
					/>
				</View>
			</View>
		</View>
	)
}

const mapStateToProps = (state: InitStateType) => ({
	moneyCount: state.operation.moneyCount,
	currentAllOperations: state.operation.diagramOperations,
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(AllOperationsScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundBlack,
	},
	CardContainer: {
		backgroundColor: colors.backgroundCard,
		borderRadius: 20,
		padding: 15,


		flex: 1,
		marginTop: 30,
		marginHorizontal: 15,
	}
})
