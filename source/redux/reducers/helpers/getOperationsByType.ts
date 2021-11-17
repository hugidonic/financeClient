import { initOperationStateType } from "../operationReducer"

/**
 * @param state operation reducer's state
 * @returns operations by type
 */
const getOperationsByType = (
	state: initOperationStateType
) => {
	return state.allOperations.filter(op => op.type == state.currentOperationType)
}

export default getOperationsByType