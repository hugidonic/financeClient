// React
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// Types
import { DiagramCategoryType } from "../../../redux/reduxTypes";
// Constants
import colors from "../../../utils/colors";

interface Props {
  category: DiagramCategoryType;
}

const DiagramCategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={[styles.icon, { backgroundColor: category.color }]}>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: "cover",
            }}
            source={category.icon}
          />
        </View>
        <Text style={styles.text}>{category.name}</Text>
      </View>

      <View style={styles.center}>
        <Text style={styles.secondaryText}>{(category.percentage).toFixed(1)}%</Text>
      </View>

      <View style={styles.right}>
        <Text numberOfLines={1} style={styles.text}>{category.moneyCount} ₽</Text>
      </View>
    </View>
  );
};

export default DiagramCategoryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.backgroundCard,
    borderRadius: 8,

    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,

    alignItems: "center",
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 5,
  },
  center: {
    flex: 3,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  right: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    color: colors.white,
    fontSize: 20,
  },
  secondaryText: {
    color: colors.secondary,
    fontSize: 20,
    marginRight: 20,
  },
});
