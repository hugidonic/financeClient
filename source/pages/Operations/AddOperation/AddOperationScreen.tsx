// React
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Keyboard,
  Pressable,
} from "react-native";
// Redux
import { connect } from "react-redux";
import { addOperationAction } from "./../../../redux/actions/operationActions";

// Types
import {
  CategoryType,
  InitStateType,
  OperationType,
  OperationChooseType,
} from "../../../redux/reduxTypes";

// Components
import AddOperationHeader from "./components/AddOperationHeader";
import MoneyInput from "./components/MoneyInput";
import ChooseAccount from "./components/ChooseAccount";
import CategoriesList from "../../../components/CategoryComponents/CategoriesList";
import PrimaryBtn from "./../../../components/PrimaryBtn";
// Constants
import colors from "./../../../utils/colors";
import { PADDING_HORIZONTAL } from "../../../constants/contstants";
import { AddOperationScreenProps } from "../../../routes/routeTypes";
import { updateCategoryListAction } from "../../../redux/actions/categoryActions";

interface Props {
  navigation: AddOperationScreenProps["navigation"];
  expenseCategories: CategoryType[];
  incomeCategories: CategoryType[];
  addOperationAction: (newOperation: OperationType) => void;
  currentOperationType: OperationChooseType;
  
  // updateCategoryListAction: (cat: CategoryType) => void
  choosenCategory: CategoryType;
}

const AddOperationScreen = ({
  navigation,
  expenseCategories,
  incomeCategories,
  addOperationAction,
  currentOperationType,

  choosenCategory,
  // updateCategoryListAction
}: Props) => {
  // Operaion properties
  const [moneyCount, setMoneyCount] = React.useState<string>("");
  const [operationType, setOperationType] =
    React.useState<OperationChooseType>(currentOperationType);
  // const [choosenCategory, setChoosenCategory] = React.useState<CategoryType>(null)

  // Categories for list of categories
  const [categories, setCategories] = React.useState<CategoryType[]>(null);
  // Make button active
  const [isReady, setIsReady] = React.useState<boolean>(false);


  // Set categories for each operation type
  React.useEffect(() => {
    if (operationType == "Расходы") {
      setCategories(expenseCategories.slice(0, 7));
    } else {
      setCategories(incomeCategories.slice(0, 7));
    }
  }, [operationType, expenseCategories, incomeCategories]);

  // Check if all properties exist
  React.useEffect(() => {
    if (+moneyCount > 0 && choosenCategory) {
      setIsReady(true);
    }
  }, [moneyCount, choosenCategory]);

  const setMoneyMiddleware = (num: string) => {
    const lastDig = num[num.length - 1];
    if (num.length > 0) {
      if (!lastDig.match(/\d/)) {
        return;
      }
    }
    setMoneyCount(num);
  };

  // Add operation
  const addOperation = () => {
    if (isReady) {
      const newOperation: OperationType = {
        moneyCount: +moneyCount,
        choosenCategory,
        type: operationType,
        createdAt: new Date().toISOString(),
      };
      addOperationAction(newOperation);
      navigation.goBack();
    }
  };

  if (!categories) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <AddOperationHeader setType={setOperationType} />
      <View style={styles.innerContainer}>
        <MoneyInput
          moneyCount={moneyCount}
          setMoneyCount={setMoneyMiddleware}
        />
        <ChooseAccount />

        <Text style={{ color: colors.secondary, marginTop: 20, fontSize: 18 }}>
          Категории
        </Text>

        <View>
          <CategoriesList
            operationType={operationType}
            categories={categories}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <PrimaryBtn text="Добавить" func={addOperation} active={isReady} />
        </View>
      </View>
    </Pressable>
  );
};

const mapStateToProps = (state: InitStateType) => ({
  expenseCategories: state.category.expenseCategories,
  incomeCategories: state.category.incomeCategories,
  currentOperationType: state.operation.currentOperationType,
  choosenCategory: state.category.choosenCategory,
});

const mapDispatchToProps = {
  addOperationAction,
  updateCategoryListAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOperationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBlack,
  },
  innerContainer: {
    paddingHorizontal: PADDING_HORIZONTAL,
    flex: 1,
  },
});
