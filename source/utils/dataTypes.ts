import uuid from './uuid';


export type returnDataType = {
	sectionsOperations: OperationSectionType[],
	allMoneySpent: number,
	categories: CategoryType[],
	operations: OperationType[]
}

export type OperationSectionType = {
	percentage: number,
	color: string
}

// TODO: ADD MORE CATEGORY NAMES
export type categoryNames = 'Кафе' | 'Транспорт' | 'Другое' 


export type OperationType = {
	cost: number,
	category: categoryNames,
	categoryColor: string,
	createdAt: string,
	id: string,
}