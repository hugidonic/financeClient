import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { OperationChooseType } from "../../../../../redux/reduxTypes";
import colors from "../../../../../utils/colors";

interface Props {
  setType: (type: OperationChooseType) => void;
  type: OperationChooseType;
}

const RadioButtons = ({setType, type}: Props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.radioButtonContainer}
        onPress={() => setType("Расходы")}
      >
        <View style={styles.radioCircle}>
          {type === "Расходы" && <View style={styles.selectedRb} />}
        </View>
        <Text style={styles.radioText}>Расходы</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.radioButtonContainer}
        onPress={() => setType("Доходы")}
      >
        <View style={styles.radioCircle}>
          {type === "Доходы" && <View style={styles.selectedRb} />}
        </View>
        <Text style={styles.radioText}>Доходы</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 35,
  },
  radioButtonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioText: {
    marginLeft: 15,
    fontSize: 22,
    color: "#fff",
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: colors.primary,
  },
});
