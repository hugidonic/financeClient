import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { CategoryType } from "../reduxTypes";
import { AnyAction } from "redux";
import { createCategoryActionCreator, setChoosenCategoryActionCreator, updateCategoryListActionCreator } from "../actionTypes";

export const createCategoryAction =
  (newCategory: CategoryType): ThunkAction<void, {}, unknown, AnyAction> =>
  (dispatch) => {
    dispatch(createCategoryActionCreator(newCategory));
  };


export const setChoosenCategoryAction = (choosenCategory: CategoryType): ThunkAction<void, {}, unknown, AnyAction> => (dispatch) => {
  dispatch(setChoosenCategoryActionCreator(choosenCategory))
}
export const updateCategoryListAction = (choosenCategory: CategoryType): ThunkAction<void, {}, unknown, AnyAction> => (dispatch) => {
  dispatch(updateCategoryListActionCreator(choosenCategory))
}