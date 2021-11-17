import { initOperationStateType } from "../operationReducer"

const getNewCurrentMoney = (
	state: initOperationStateType
) => {
	const cur = state.currentMoney
	const expense = state.allOperations.filter(op => op.type == 'Расходы').reduce((prev, op) => {
		return prev + op.moneyCount
	}, 0)
	const income = state.allOperations.filter(op => op.type == 'Доходы').reduce((prev, op) => {
		return prev + op.moneyCount
	}, 0)
	
	return cur - expense + income
}

export default getNewCurrentMoney