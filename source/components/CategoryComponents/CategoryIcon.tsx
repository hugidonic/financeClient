import React from "react";
import { Image, Pressable, View, StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const { width } = Dimensions.get("screen");

interface Props {
  icon: typeof require;
  selected: boolean;
  selectIcon: () => void;
}

const CategoryIcon = ({ icon, selected, selectIcon }: Props) => {
  return (
    <Pressable
      style={[
        styles.iconContainer,
        {
          borderWidth: 1,
          borderColor: selected ? colors.primary : "transparent",
        },
      ]}
      onPress={selectIcon}
    >
      <View style={styles.iconCircle}>
        <Image
          source={icon}
          style={{
            resizeMode: "cover",
            width: 50,
            height: 50,
          }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: (width - 30) / 4,
    height: 90,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#878787",
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryIcon;
