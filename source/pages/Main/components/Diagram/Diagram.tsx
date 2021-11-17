// React
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// Components
import DiagramCircle from "./DiagramCircle";
import AddOperationButton from "./../AddOperationButton/AddOperationButton";
import Periods from "./../../../../components/Periods";
// Types and constants
import { DiagramScreenNavigationProp } from "../../../../routes/routeTypes";
import colors from "../../../../utils/colors";

interface Props {
  navigation: DiagramScreenNavigationProp["navigation"];
}

const Diagram = (props: Props) => {
  return (
    <View style={styles.diagramContainer}>
      <Periods />
      <DiagramCircle />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <AddOperationButton  navigation={props.navigation} />
      </View>
    </View>
  );
};

export default Diagram;

const styles = StyleSheet.create({
  diagramContainer: {
    backgroundColor: colors.backgroundCard,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    paddingBottom: 10,
    borderRadius: 20,
    alignItems: "center",
  },
});
