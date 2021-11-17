import {
  OperationType,
  PeriodsChooseType,
} from "../../reduxTypes";
import { initOperationStateType } from "../operationReducer";

const endDate = new Date();
endDate.setHours(23, 59, 59, 999);

const checkToDate = (
  operations: OperationType[],
  beginDate: Date
): OperationType[] => {
  const newOperations = [];
  operations.forEach((op) => {
    
    const opDate = new Date(op.createdAt);
    if (opDate < endDate && opDate > beginDate) {
      newOperations.push(op);
    }
  });
  return newOperations;
};

/**
 *
 * @param curPeriod Current period
 * @param operations current operations
 * @returns operations that are in current period
 */
const getOperationsByPeriod = (
  curPeriod: PeriodsChooseType,
  operations: OperationType[]
) => {
  const beginDate = new Date();

  switch (curPeriod) {
    case "День":
      beginDate.setHours(0, 0, 0, 0);
      return checkToDate(operations, beginDate);

    case "Неделя":
      beginDate.setDate(beginDate.getDate() - 7);
      beginDate.setHours(0, 0, 0, 0);

      return checkToDate(operations, beginDate);

    case "Месяц":
      beginDate.setDate(beginDate.getDate() - 30);
      beginDate.setHours(0, 0, 0, 0);
      return checkToDate(operations, beginDate);

    case "Год":
      beginDate.setDate(beginDate.getDate() - 365);
      beginDate.setHours(0, 0, 0, 0);
      return checkToDate(operations, beginDate);
    default:
      return operations;
  }
};

export default getOperationsByPeriod;
