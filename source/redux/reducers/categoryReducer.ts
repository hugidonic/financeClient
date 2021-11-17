import { CategoryType } from "../reduxTypes";
import {
  initIncomeCategories,
  initExpenseCategories,
} from "./../../data/categories";

// Actions
import { AnyAction } from "redux";
import getNewCategories from './helpers/getNewCategories';
import {
  CREATE_CATEGORY,
  SET_CHOOSEN_CATEGORY,
  UPDATE_CATEGORY_LIST,
} from "./../actionTypes";

export type initCategoryStateType = {
  incomeCategories: CategoryType[];
  expenseCategories: CategoryType[];

  choosenCategory: CategoryType;
};

const initCategoryState: initCategoryStateType = {
  incomeCategories: initIncomeCategories,
  expenseCategories: initExpenseCategories,
  choosenCategory: null,
};

const categoryReducer = (
  state = initCategoryState,
  action: AnyAction
): initCategoryStateType => {
  switch (action.type) {
    case CREATE_CATEGORY:
      const newCategory: CategoryType = action.payload;
      if (newCategory.type == "Расходы") {
        return {
          ...state,
          expenseCategories: [newCategory, ...state.expenseCategories],
        };
      } else {
        return {
          ...state,
          incomeCategories: [newCategory, ...state.incomeCategories],
        };
      }

    case SET_CHOOSEN_CATEGORY:
      return {
        ...state,
        choosenCategory: action.payload,
      };

    // case UPDATE_CATEGORY_LIST:
    //   const newChoosenCategory: CategoryType = action.payload;
      
    //   return {
    //     ...state,
    //     expenseCategories: getNewCategories(newChoosenCategory, state.expenseCategories),
    //     incomeCategories: getNewCategories(newChoosenCategory, state.incomeCategories),
    //   }

      

    default:
      return state;
  }
};

export default categoryReducer;
