import { DiagramCategoryType, OperationType } from "../../reduxTypes";
import { initOperationStateType } from "../operationReducer";

const getNewDiagramCategories = (
  state: initOperationStateType,
  newOperation: OperationType
) => {
  const newDiagramCategories = state.diagramCategories;

  // index of an item if exists
  const diagramExistingItemIdx = newDiagramCategories.findIndex(
    (el) => el.name == newOperation.choosenCategory.name
  );

  if (diagramExistingItemIdx > -1) {
    let diagramItem = newDiagramCategories[diagramExistingItemIdx];

    const newDiagramItem: DiagramCategoryType = {
      ...diagramItem,
      moneyCount: diagramItem.moneyCount + newOperation.moneyCount,
      percentage:
        ((diagramItem.moneyCount + newOperation.moneyCount) /
          state.allMoneySpent) *
        100,
    };

    const otherItems: DiagramCategoryType[] = newDiagramCategories.map((el) => {
      return {
        ...el,
        percentage: (el.moneyCount / state.allMoneySpent) * 100,
      };
    });
    return [
      ...otherItems.slice(0, diagramExistingItemIdx),
      newDiagramItem,
      ...otherItems.slice(diagramExistingItemIdx + 1),
    ];
  } else {
    let newItem: DiagramCategoryType = {
      moneyCount: newOperation.moneyCount,
      color: newOperation.choosenCategory.color,
      name: newOperation.choosenCategory.name,
      icon: newOperation.choosenCategory.icon,
      percentage: (newOperation.moneyCount / state.allMoneySpent) * 100,
    };

    const otherItems: DiagramCategoryType[] = newDiagramCategories.map((el) => {
      return {
        ...el,
        percentage: (el.moneyCount / state.allMoneySpent) * 100,
      };
    });
    return [newItem, ...otherItems];
  }
};
export default getNewDiagramCategories;
