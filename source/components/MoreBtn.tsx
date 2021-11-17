import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { CATEGORY_ITEM_WIDTH } from "../constants/contstants";
import { CategoryType, OperationType } from "../redux/reduxTypes";
import { AllScreens, MainStackParamList } from "../routes/routeTypes";
import colors from "../utils/colors";
import { OperationChooseType } from "../redux/reduxTypes";

interface Props {
  goToStack: keyof ReactNavigation.RootParamList;
  goToScreen: AllScreens;
  propParams?: {
    operationType: OperationChooseType;
  };
}

const MoreBtn = ({ goToStack, goToScreen, propParams }: Props) => {
  const nav = useNavigation();

  const handleNavigation = () => {
    if (goToScreen == "AllCategories") {
      nav.navigate("Category", { screen: "AllCategories", params: propParams });
    } else {
      nav.navigate(goToStack, { screen: goToScreen });
    }
  };

  return (
    <Pressable onPress={handleNavigation} style={styles.container}>
      <View style={styles.iconBtn}>
        <Feather name="plus" size={40} color={colors.backgroundBlack} />
      </View>
      <Text style={{ color: "#fff", fontSize: 16 }}>Создать</Text>
    </Pressable>
  );
};

export default MoreBtn;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
    width: CATEGORY_ITEM_WIDTH,
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
