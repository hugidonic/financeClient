import { OperationType } from "../../reduxTypes"

const getNewMoneyCount = (operations: OperationType[]) => {
	return operations.reduce((prev, op) => {
		return prev + op.moneyCount
	}, 0)
}

export default getNewMoneyCount