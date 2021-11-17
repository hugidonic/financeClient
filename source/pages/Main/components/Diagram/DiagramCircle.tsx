// React
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// Components
import PieChart from "react-native-pie";
// Redux
import { connect } from "react-redux";
import {
  DiagramCategoryType,
  InitStateType,
} from "../../../../redux/reduxTypes";
// Utils
import colors from "../../../../utils/colors";

interface Props {
  moneyCount: number;
  diagramCategories: DiagramCategoryType[];
}
type SectionType = {
  color: string,
  percentage: number
}

const DiagramCircle = ({ moneyCount, diagramCategories }: Props) => {
  const [sections, setSections] = React.useState<SectionType[]>([])

  React.useEffect(() => {
    if (diagramCategories.length == 0) {
      setSections([{
        color: colors.secondary,
        percentage: 100,
      }])
    } else {
      setSections(diagramCategories.map((cat) => {
        return {
          color: cat.color,
          percentage: cat.percentage,
        };
      }));
    }
    
  }, [diagramCategories])

  return (
    <View style={styles.container}>
      <PieChart
        radius={120}
        innerRadius={85}
        sections={sections}
        dividerSize={4}
        backgroundColor={colors.backgroundCard}
        strokeCap={"butt"}
      />

      <View style={styles.innerCircle}>
        <Text numberOfLines={1} ellipsizeMode='middle' style={styles.innerText}>{moneyCount} ₽ </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state: InitStateType) => ({
  moneyCount: state.operation.moneyCount,
  diagramCategories: state.operation.diagramCategories,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DiagramCircle);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 50,
  },
  innerCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  innerText: {
    color: colors.white,
    maxWidth: '60%',
    fontSize: 34,
  },
});
