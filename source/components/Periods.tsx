import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "./../utils/colors";
// Redux
import { connect } from 'react-redux';
import { setPeriodAction } from '../redux/actions/operationActions'
import { PeriodsChooseType } from "../redux/reduxTypes";


interface Props {
  setPeriodAction: (per: PeriodsChooseType) => void
}

const Periods = ({setPeriodAction}: Props) => {
  const periods: PeriodsChooseType[] = ["День", "Неделя", "Месяц", "Год"];
  const [activeIdx, setActiveIdx] = React.useState<number>(0);

  const setPeriod = (idx: number) => {
    setActiveIdx(idx);
    // Set active period
    setPeriodAction(periods[idx]);
  };

  return (
    <View style={styles.periodContainer}>
      {periods.map((per, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => setPeriod(idx)}
          style={{ marginHorizontal: 10 }}
        >
          <Text
            style={[
              styles.periodText,
              { color: idx == activeIdx ? colors.primary : colors.secondary },
            ]}
          >
            {per}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  setPeriodAction
}


export default connect(mapStateToProps, mapDispatchToProps)(Periods)

const styles = StyleSheet.create({
  periodContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  periodText: {
    fontSize: 20,
  },
});
