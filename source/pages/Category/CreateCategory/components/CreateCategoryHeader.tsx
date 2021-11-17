import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "./../../../../utils/colors";
import { useNavigation } from "@react-navigation/core";
import Feather from "react-native-vector-icons/Feather";

const CreateCategoryHeader = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable
          style={{ position: "absolute", left: 10 }}
          onPress={() => nav.goBack()}
        >
          <Feather name="arrow-left" size={35} color={colors.white} />
        </Pressable>
        <Text style={{ color: "#fff", fontSize: 20 }}>Создать категорию</Text>
      </View>
    </View>
  );
};

export default CreateCategoryHeader;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.backgroundBlue,
		borderBottomRightRadius: 40,
		borderBottomLeftRadius: 40,
		paddingHorizontal: 15,
		paddingVertical: 20,
		justifyContent: 'space-between',
	},
	innerContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
});
