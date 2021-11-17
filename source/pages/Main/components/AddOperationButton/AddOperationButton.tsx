// Redux
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
// Types
import { DrawerStackScreenProps } from "../../../../routes/routeTypes";
import colors from "../../../../utils/colors";

type Props = {
  navigation: DrawerStackScreenProps['navigation']
}

const AddOperationButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.btnContainer}
      onPress={() => props.navigation.navigate('Operations', {screen: 'AddOperation'})}
    >
      <Entypo name="plus" size={36} color={colors.backgroundCard} />
    </TouchableOpacity>
  );
};

export default AddOperationButton;

const styles = StyleSheet.create({
  btnContainer: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
