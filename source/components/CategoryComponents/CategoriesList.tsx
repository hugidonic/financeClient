import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
// Redux
import { setChoosenCategoryAction } from "./../../redux/actions/categoryActions";

// Types
import { CategoryType, InitStateType } from "../../redux/reduxTypes";
import { OperationChooseType } from "../../redux/reduxTypes";
// Components
import CategoryItem from "../CategoryComponents/CategoryItem";
import MoreBtn from "./../MoreBtn";
import { connect } from 'react-redux';

interface Props {
  categories: CategoryType[];
  operationType?: OperationChooseType;
  setChoosenCategoryAction: (cat: CategoryType) => void;
  shouldGoBackInstantly?: boolean;
}

const CategoriesList = ({
  shouldGoBackInstantly = false,
  categories,
  operationType = null,
  setChoosenCategoryAction,
}: Props) => {
  const [activeIdx, setActiveIdx] = React.useState<number>(null);
  const nav = useNavigation();

  const selectItem = (idx: number) => {
    setActiveIdx(idx);
    setChoosenCategoryAction(categories[idx]);
    if (shouldGoBackInstantly) {
      nav.goBack();
    }
  };

  const route = useRoute();

  return (
    <View style={styles.listContainer}>
      {categories.map((item, idx) => (
        <Pressable onPress={() => selectItem(idx)} style={{}} key={idx}>
          <CategoryItem selected={idx == activeIdx} categoryItem={item} />
        </Pressable>
      ))}
      <MoreBtn
        goToStack="Category"
        goToScreen={
          route.name == "AddOperation" ? "AllCategories" : "CreateCategory"
        }
        propParams={{
          operationType,
        }}
      />
    </View>
  );
};

const mapStateToProps = (state: InitStateType) => ({
  
})

const mapDispatchToProps = {
  setChoosenCategoryAction
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList)

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
