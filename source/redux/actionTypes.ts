import { Action, AnyAction } from "redux";
import {
  CategoryType,
  OperationChooseType,
  OperationType,
  PeriodsChooseType,
} from "./reduxTypes";
/**
 * Create category action
 */
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const createCategoryActionCreator = (
  newCategory: CategoryType
): AnyAction => ({
  type: CREATE_CATEGORY,
  payload: newCategory,
});

/**
 * Set choosen catehory
 */
export const SET_CHOOSEN_CATEGORY = "SET_CHOOSEN_CATEGORY";
export const setChoosenCategoryActionCreator = (
  choosenCategory: CategoryType
): AnyAction => ({
  type: SET_CHOOSEN_CATEGORY,
  payload: choosenCategory,
});

/**
 * update new categoryList
 */
export const UPDATE_CATEGORY_LIST = "UPDATE_CATEGORY_LIST";
export const updateCategoryListActionCreator = (
  newCategory: CategoryType
): AnyAction => ({
  type: UPDATE_CATEGORY_LIST,
  payload: newCategory,
});
/**
 * Add Operation action
 */
export const ADD_OPERATION = "ADD_OPERATION";
export type AddOperationAction = {
  type: string;
  payload: OperationType;
};
export const addOperationActionCreator = (
  newOperation: OperationType
): AnyAction => ({
  type: ADD_OPERATION,
  payload: newOperation,
});
export const UPDATE_DIAGRAM = "UPDATE_DIAGRAM";
export const updateDiagramActionCreator = (): AnyAction => ({
  type: UPDATE_DIAGRAM,
});

export const ADD_DIAGRAM_OPERATION = "ADD_DIAGRAM_OPERATION";
export const addDiagramActionCreator = (
  newOperation: OperationType
): AnyAction => ({
  type: ADD_DIAGRAM_OPERATION,
  payload: newOperation,
});

/**
 * Set period
 */
export const SET_PERIOD = "SET_PERIOD";
export const setPeriodActionCreator = (
  newPeriod: PeriodsChooseType
): AnyAction => ({
  type: SET_PERIOD,
  payload: newPeriod,
});

/**
 * Set Operation Type
 */
export const SET_OPERATION_TYPE = "SET_OPERATION_TYPE";
export const setOperationTypeActionCreator = (
  operationType: OperationChooseType
): AnyAction => ({
  type: SET_OPERATION_TYPE,
  payload: operationType,
});

export const GET_ALL_OPERATIONS = "GET_ALL_OPERATIONS";
export const getAllOperationsActionCreator = (
  allOperations: OperationType[]
): AnyAction => ({
  type: GET_ALL_OPERATIONS,
  payload: allOperations,
});
export type AllOperationActions =
  | typeof ADD_OPERATION
  | typeof ADD_DIAGRAM_OPERATION
  | typeof SET_PERIOD
  | typeof SET_OPERATION_TYPE;
