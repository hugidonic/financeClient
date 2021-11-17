import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "./../../../../utils/colors";

interface Props {
  setName: (name:string) => void
  name: string
}

const CategoryNameInput = ({name,setName}: Props) => {

  return (
    <View style={{marginVertical: 20,}}>
      <TextInput
        value={name}
				
        placeholder="Название категории..."
        placeholderTextColor={colors.secondary}
        onChangeText={(t) => setName(t)}
        style={styles.input}
      />
    </View>
  );
};

export default CategoryNameInput;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    fontSize: 20,
    color: colors.white,
  },
});
