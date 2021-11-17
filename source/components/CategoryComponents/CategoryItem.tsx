import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CATEGORY_ITEM_WIDTH } from "../../constants/contstants";
import { CategoryType } from "../../redux/reduxTypes";

interface Props {
  categoryItem: CategoryType;
  selected: boolean;
}

const CategoryItem = ({ categoryItem, selected }: Props) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: selected? categoryItem.color : 'transparent'}
      ]}
    >
      <View style={[styles.icon, { backgroundColor: categoryItem.color }]}>
        <Image
          source={categoryItem.icon}
          style={{
            resizeMode: "cover",
            width: 40,
            height: 40,
          }}
        />
      </View>
      <Text
        numberOfLines={1}
        style={[styles.title, { color: selected? '#fff':categoryItem.color }]}
      >
        {categoryItem.name}
      </Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 18,
    width: CATEGORY_ITEM_WIDTH,
  },
  icon: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
  },
});
