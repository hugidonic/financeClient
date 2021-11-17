// React
import React from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// Types
import colors from "../../../utils/colors";
import { DiagramScreenNavigationProp } from "../../../routes/routeTypes";
import { InitStateType, OperationChooseType } from "../../../redux/reduxTypes";
// Redux
import { connect } from "react-redux";
import { setOperationTypeAction } from "../../../redux/actions/operationActions";

const iconSize = 32;

type Props = {
  navigation: DiagramScreenNavigationProp["navigation"];
  currentMoney: number;
  setOperationTypeAction: (op: OperationChooseType) => void;
};

const DiagramHeader: React.FC<Props> = ({
  setOperationTypeAction: propsSetOperationType,
  currentMoney,
  navigation,
}) => {
  const [activeOperationType, setActiveOperationType] =
    React.useState<OperationChooseType>("Расходы");

  const setOperationType = (str: OperationChooseType) => {
    setActiveOperationType(str);
    propsSetOperationType(str);
  };

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };
  const goToAllOperations = () => {
    navigation.navigate("Operations", { screen: "AllOperations" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* MENU */}
        <Pressable onPress={handleOpenDrawer}>
          <Ionicons name="menu" color={colors.white} size={iconSize} />
        </Pressable>

        {/* BILL */}
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="wallet-outline"
              color={colors.white}
              size={28}
              style={{ marginRight: 8 }}
            />
            <Text style={styles.headerText}>Итого</Text>
            {/* TODO: add ability to switch the bill account */}
          </View>
          <View>
            <Text style={[styles.headerText, { fontSize: 24 }]}>
              {currentMoney} ₽
            </Text>
          </View>
        </View>

        {/* all operations */}
        <Pressable onPress={goToAllOperations}>
          <Ionicons
            name="receipt-outline"
            color={colors.white}
            size={iconSize}
          />
        </Pressable>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => setOperationType("Расходы")}>
          <View>
            <Text
              style={[
                styles.btnText,
                {
                  fontWeight: activeOperationType == "Расходы" ? "700" : "400",
                },
              ]}
            >
              РАСХОДЫ
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOperationType("Доходы")}>
          <View>
            <Text
              style={[
                styles.btnText,
                { fontWeight: activeOperationType == "Доходы" ? "700" : "400" },
              ]}
            >
              ДОХОДЫ
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state: InitStateType) => ({
  currentMoney: state.operation.currentMoney,
});

const mapDispatchToProps = {
  setOperationTypeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DiagramHeader);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    width: "100%",
    paddingVertical: 15,
    backgroundColor: colors.backgroundBlue,
  },
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    color: colors.white,
  },
  indicator: {
    width: 100,
    height: 4,
    backgroundColor: colors.white,
    position: "absolute",
    bottom: -10,
  },
  headerText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 18,
  },
});
