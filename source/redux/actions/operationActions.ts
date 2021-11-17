import {
  addOperationActionCreator,
  setOperationTypeActionCreator,
  getAllOperationsActionCreator,
  updateDiagramActionCreator,
} from "../actionTypes";
import {
  InitStateType,
  OperationChooseType,
  OperationType,
  PeriodsChooseType,
} from "../reduxTypes";
import {
  setPeriodActionCreator,
} from "./../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addOperationAction =
  (newOperation: OperationType) =>
  async (dispatch, getState: () => InitStateType) => {
    dispatch(addOperationActionCreator(newOperation));
    dispatch(updateDiagramActionCreator())

    try {
      const jsonValue = JSON.stringify(getState().operation.allOperations);
      await AsyncStorage.setItem("allOperations", jsonValue);
    } catch (er) {
      console.error(er);
    }
  };

export const setPeriodAction = (newPeriod: PeriodsChooseType) => (dispatch) => {
  dispatch(setPeriodActionCreator(newPeriod));
  dispatch(updateDiagramActionCreator())
};
export const setOperationTypeAction =
  (operationType: OperationChooseType) => (dispatch) => {
    dispatch(setOperationTypeActionCreator(operationType));
    dispatch(updateDiagramActionCreator())
  };

export const getAllOperations = () => async (dispatch) => {
  try {
    const jsonValue: string = await AsyncStorage.getItem("allOperations");
    const allOperations: OperationType[] = JSON.parse(jsonValue);
    dispatch(getAllOperationsActionCreator(allOperations));
    dispatch(updateDiagramActionCreator())
  } catch (er) {
    console.error(er);
  }
};

export const clearLocalStorage = async () => {
  await AsyncStorage.setItem("allOperations", JSON.stringify([]));
};
