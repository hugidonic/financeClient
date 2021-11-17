import { DiagramCategoryType, OperationType } from "../../reduxTypes"
import { initOperationStateType } from "../operationReducer"

/**
 * 
 * @param allMoney state moneyCount (AllMoneySpent | AllMoneyGained)
 * @param operations current Operations
 * @returns DiagramCategories
 */
const getDiagramCategoriesFromOperations = (
	allMoney: number,
	operations: OperationType[]
): DiagramCategoryType[] => {

	return operations.map(op => {
		return {
			name: op.choosenCategory.name,
			color: op.choosenCategory.color,
			icon: op.choosenCategory.icon,
			percentage: (op.moneyCount / allMoney) * 100,
			moneyCount: op.moneyCount
		}
	})
}
export default getDiagramCategoriesFromOperations