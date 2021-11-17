import { combineReducers } from "redux";
// Reducers
import categoryReducer from "./categoryReducer";
import operationReducer from './operationReducer';

const rootReducer = combineReducers({
	category: categoryReducer,
	operation: operationReducer,
})

export default rootReducer