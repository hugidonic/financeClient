import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AllCategoriesHeader from "./components/AllCategoriesHeader";
import colors from "../../../utils/colors";
import {
  initExpenseCategories,
  initIncomeCategories,
} from "../../../data/categories";
import CategoriesList from "../../../components/CategoryComponents/CategoriesList";
import { AllCategoriesScreenProps } from "../../../routes/routeTypes";
import { CategoryType } from "../../../redux/reduxTypes";

interface Props {
  route: AllCategoriesScreenProps["route"];
}

const AllCategoriesScreen = ({ route }: Props) => {
  const [categories, setCategories] = React.useState<CategoryType[]>(null);
  const operType = route.params.operationType;

  React.useEffect(() => {
    if (operType === "Расходы") {
      setCategories(initExpenseCategories);
    } else {
      setCategories(initIncomeCategories);
    }
  }, [operType]);

  if (!categories) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <AllCategoriesHeader />

      <View style={styles.innerContainer}>
        <CategoriesList
          operationType={operType}
          categories={categories}
          shouldGoBackInstantly
        />
      </View>
    </View>
  );
};

export default AllCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBlack,
  },
  innerContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  iconBtn: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
});
