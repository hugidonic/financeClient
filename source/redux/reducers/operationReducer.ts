import {
  CategoryType,
  DiagramCategoryType,
  OperationChooseType,
  OperationType,
  PeriodsChooseType,
} from "../reduxTypes";
import { AnyAction } from "redux";
import {
  ADD_OPERATION,
  GET_ALL_OPERATIONS,
  SET_OPERATION_TYPE,
  SET_PERIOD,
  UPDATE_DIAGRAM,
} from "../actionTypes";

/**
 * Helper functions
 */
import getNewDiagramCategories from "./helpers/getNewDiagramCategories";
import getOperationsByPeriod from "./helpers/getOperationsByPeriod";
import getDiagramCategoriesFromOperations from "./helpers/getDiagramCategoriesFromOperations";
import { PresentIcon } from "../../constants/icons";
import {
  initExpenseCategories,
  initIncomeCategories,
} from "./../../data/categories";
import getOperationsByType from "./helpers/getOperationsByType";
import getNewMoneyCount from "./helpers/getNewMoneyCount";
import getNewCurrentMoney from "./helpers/getNewCurrentMoney";

// Initial state types
export type initOperationStateType = {
  isDataLoading: boolean;

  currentMoney: number;
  moneyCount: number;

  allOperations: OperationType[];
  diagramOperations: OperationType[];

  diagramCategories: DiagramCategoryType[];
  currentPeriod: PeriodsChooseType;
  currentOperationType: OperationChooseType;
};

const lastWeekDate = new Date();
lastWeekDate.setDate(lastWeekDate.getDate() - 5);

const lastWeekOperation: OperationType = {
  moneyCount: 40,
  choosenCategory: initExpenseCategories[4],
  createdAt: lastWeekDate.toISOString(),
  type: "Расходы",
};
const lastmonthDate = new Date();
lastmonthDate.setDate(lastmonthDate.getDate() - 27);

const lastmonthOperation: OperationType = {
  moneyCount: 150,
  choosenCategory: initIncomeCategories[2],
  createdAt: lastmonthDate.toISOString(),
  type: "Доходы",
};

const operationInitState: initOperationStateType = {
  isDataLoading: true,

  currentMoney: 2000,
  moneyCount: 0,

  allOperations: [lastmonthOperation, lastWeekOperation],
  diagramOperations: [],

  diagramCategories: [],

  currentPeriod: "День",
  currentOperationType: "Расходы",
};

const operationReducer = (
  state = operationInitState,
  action: AnyAction
): initOperationStateType => {
  switch (action.type) {
    /**
     * ADD OPERATION IN STATE
     */
    case ADD_OPERATION:
      const newOperation: OperationType = action.payload;

      const currMoney =
        newOperation.type == "Расходы"
          ? state.currentMoney - newOperation.moneyCount
          : state.currentMoney + newOperation.moneyCount;

      return {
        ...state,
        currentMoney: currMoney,
        allOperations: [newOperation, ...state.allOperations],
      };

    /**
     * UPDATE DIAGRAM 
     */
    case UPDATE_DIAGRAM:
      const operationsByType = getOperationsByType(state)
      const newOperations = getOperationsByPeriod(state.currentPeriod, operationsByType)
      const newMoneyCount = getNewMoneyCount(newOperations)
      return {
        ...state,
        diagramOperations: newOperations,
        moneyCount: newMoneyCount,
        diagramCategories: getDiagramCategoriesFromOperations(newMoneyCount, newOperations),
      };
    /**
     * SET NEW PERIOD
     */
    case SET_PERIOD:
      return {
        ...state,
        currentPeriod: action.payload
      };

    /**
     * SET NEW OPERATION TYPE
     */
    case SET_OPERATION_TYPE:
      return {
        ...state,
        currentOperationType: action.payload,
      };

    // case SET_CURRENT_MONEY:
    //   return {
    //     ...state,
    //     currentMoney: getNewCurrentMoney(state)
    //   }
    /**
     * GET ALL OPERATIONS
     */
    case GET_ALL_OPERATIONS:
      return {
        ...state,
        allOperations: [...state.allOperations, ...action.payload],
        isDataLoading: false,
      };
    


    default:
      return state;
  }
};

export default operationReducer;
