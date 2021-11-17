import { initCategoryStateType } from "./reducers/categoryReducer";
import { initOperationStateType } from "./reducers/operationReducer";

export type InitStateType = {
  category: initCategoryStateType;
  operation: initOperationStateType;
};

export type PeriodsChooseType = "День" | "Неделя" | "Месяц" | "Год"

export type OperationChooseType = "Доходы" | "Расходы";

export type CategoryType = {
  name: string;
  type: OperationChooseType;
  color: string;
  icon: typeof require;
};
export type DiagramCategoryType = {
  name: string;
  color: string;
  percentage: number;
  icon: typeof require;
  moneyCount: number;
};

export type OperationType = {
  moneyCount: number;
  createdAt: string;
  choosenCategory: CategoryType;
  type: CategoryType["type"];
};

export type UserType = {
  username: string;
  currentMoney: number;
};
