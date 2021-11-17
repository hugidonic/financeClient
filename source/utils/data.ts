// import uuid from './uuid';


// const categories = [
// 	{
// 		name: "Кафе",
// 		categorySpent: 0,
// 		categoryColor: '#EBD22F',
// 		categoryPercentage: 0,
// 	},
// 	{
// 		categoryName: 'Транспорт',
// 		categorySpent: 0,
// 		categoryColor: '#404FCD',
// 		categoryPercentage: 0,
// 	},
// 	{
// 		categoryName: 'Другое',
// 		categorySpent: 0,
// 		categoryColor: '#C70039',
// 		categoryPercentage: 0,
// 	},
// ]


// const operations = [
// 	{
// 		cost: 200,
// 		category: 'Кафе',
// 		categoryColor: '',
// 		createdAt: new Date().toISOString(),
// 		id: uuid(),
// 	},
// 	{
// 		cost: 300,
// 		category: 'Транспорт',
// 		categoryColor: '',
// 		createdAt: new Date().toISOString(),
// 		id: uuid(),
// 	},
// 	{
// 		cost: 100,
// 		category: 'Кафе',
// 		categoryColor: '',
// 		createdAt: new Date().toISOString(),
// 		id: uuid(),
// 	},
// 	{
// 		cost: 400,
// 		category: 'Транспорт',
// 		categoryColor: '',
// 		createdAt: new Date().toISOString(),
// 		id: uuid(),
// 	},
// 	{
// 		cost: 300,
// 		category: 'Другое',
// 		categoryColor: '',
// 		createdAt: new Date().toISOString(),
// 		id: uuid(),
// 	},
// 	{
// 		cost: 100,
// 		category: 'Кафе',
// 		categoryColor: '',
// 		createdAt: new Date().toISOString(),
// 		id: uuid(),
// 	},
// ]

// operations.forEach(oper => {
// 	const cat = categories.find(c => c.categoryName == oper.category)
// 	oper.categoryColor = cat.categoryColor
// })

// let allMoneySpent: number = 0

// operations.forEach(oper => {
// 	const idx = categories.findIndex(cat => cat.categoryName == oper.category)
// 	allMoneySpent += oper.cost
// 	categories[idx].categorySpent += oper.cost
// });

// categories.forEach(cat => {
// 	cat.categoryPercentage = Math.trunc(cat.categorySpent / allMoneySpent * 100)
// })

// const sectionsOperations = categories.map(cat => {
// 	return {
// 		percentage: cat.categorySpent / allMoneySpent * 100,
// 		color: cat.categoryColor
// 	}
// })

// const data = {
// 	sectionsOperations,
// 	allMoneySpent,
// 	categories,
// 	operations,
// }


// export default data