// React
import React from "react";
import { StyleSheet, FlatList, View, ScrollView } from "react-native";
// Redux
import { connect } from "react-redux";
import { DiagramCategoryType, InitStateType } from "../../redux/reduxTypes";
import { getAllOperations } from "../../redux/actions/operationActions";
// Components
import Diagram from "./components/Diagram/Diagram";
import DiagramCategoryItem from "./components/DiagramCategoryItem";
import DiagramHeader from "./components/DiagramHeader";
// Data and types
import colors from "./../../utils/colors";
import { DiagramScreenNavigationProp } from "../../routes/routeTypes";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  route: DiagramScreenNavigationProp["route"];
  navigation: DiagramScreenNavigationProp["navigation"];
  diagramCategories: DiagramCategoryType[];
  getAllOperations: () => void;
  isDataLoading: boolean;
}

const DiagramScreen = ({
  isDataLoading,
  diagramCategories,
  getAllOperations: getOperations,
  navigation,
}: Props) => {
  React.useEffect(() => {
    getOperations();
  }, []);

  if (isDataLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.backgroundBlack }} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <DiagramHeader navigation={navigation} />
      <ScrollView>
        <View style={{ paddingHorizontal: 15, alignItems: "center" }}>
          <Diagram navigation={navigation} />

          <FlatList
            data={diagramCategories}
            renderItem={({ item }) => <DiagramCategoryItem category={item} />}
            nestedScrollEnabled
            keyExtractor={(_, idx) => idx.toString()}
            style={{
              width: "100%",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: InitStateType) => ({
  diagramCategories: state.operation.diagramCategories,
  isDataLoading: state.operation.isDataLoading,
});

const mapDispatchToProps = {
  getAllOperations,
};

export default connect(mapStateToProps, mapDispatchToProps)(DiagramScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBlack,
  },
});
