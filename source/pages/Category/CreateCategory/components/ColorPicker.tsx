import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

interface Props {
  setColor: (clr: string) => void;
}

const ColorPicker = ({ setColor }: Props) => {
  const colors = [
    "#9BB58E",
    "#041EFF",
    "#FDFF0A",
    "#EF4B7B",
    "#FE970F",
    "#19647E",
    "#64FF87",
  ];

  const [activeIdx, setActiveIdx] = React.useState(null);

  const selectColor = (idx: number) => {
    setActiveIdx(idx);
    setColor(colors[idx]);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
      }}
    >
      {colors.map((clr, idx) => {
        return (
          <Pressable
            onPress={() => selectColor(idx)}
            key={clr}
            style={[
              styles.item,
              {backgroundColor: clr},
            ]}
          >
            {idx == activeIdx && <Entypo name="check" size={28} color="#fff" />}
          </Pressable>
        );
      })}
    </View>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  item: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
});
