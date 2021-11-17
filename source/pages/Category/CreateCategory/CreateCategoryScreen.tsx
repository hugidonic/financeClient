// React
import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// Components
import CreateCategoryHeader from "./components/CreateCategoryHeader";
import CategoryNameInput from "./components/CategoryNameInput";
import RadioButtons from "./components/RadioButton/RadioButtons";
import CategoryIconsList from "./components/CategoryIconsList";
import ColorPicker from "./components/ColorPicker";
import PrimaryBtn from "../../../components/PrimaryBtn";

// Data and Types
import colors from "../../../utils/colors";
import { PADDING_HORIZONTAL } from "../../../constants/contstants";
import { OperationChooseType } from "../../../redux/reduxTypes";
import { CategoryType } from '../../../redux/reduxTypes'
import { createCategoryAction } from "../../../redux/actions/categoryActions";
import {connect} from 'react-redux'
import { useNavigation } from '@react-navigation/core';
import AllOperationsScreen from './../../Operations/AllOperations/AllOperationsScreen';

interface Props {
  createCategoryAction: (newCategory: CategoryType) => void
}

const CreateCategoryScreen = ({createCategoryAction}: Props) => {
	// Category 
  const [name, setName] = React.useState<string>("");
  const [type, setType] = React.useState<OperationChooseType>(null);
  const [icon, setIcon] = React.useState<typeof require>(null);
  const [color, setColor] = React.useState<string>("");
  const [isReady, setIsReady] = React.useState<boolean>(false)
  
  // 
  const nav = useNavigation()

  React.useEffect(() => {
    if ((name.length > 1) &&
        (type) &&
        (icon) &&
        (color)) {
          setIsReady(true)
       }

  }, [name, type, icon, color])

  const createNewCategory = () => {
		const newCategory: CategoryType = {
			name,
			type,
			icon,
			color
		}

    if (isReady) {
      createCategoryAction(newCategory)
      setName('')
      setColor('')
      setIcon(null)
      setType(null)

      nav.navigate('Operations', {screen: 'AddOperation'})
    }
    
	};

  return (
    <View style={styles.container}>
      <CreateCategoryHeader />
      <KeyboardAvoidingView
        behavior="padding"
        style={{ paddingHorizontal: PADDING_HORIZONTAL }}
      >
        <CategoryNameInput name={name} setName={setName} />
        <RadioButtons type={type} setType={setType} />

        <Text style={{ color: "#fff", fontSize: 18, marginVertical: 10 }}>
          Иконки
        </Text>
        <CategoryIconsList setIcon={setIcon} />

        <ColorPicker setColor={setColor} />

        <View style={{ alignItems: "center", marginTop: 25 }}>
          <PrimaryBtn text="Добавить" func={createNewCategory} active={isReady} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const mapDispatchToProps = {
  createCategoryAction
}


export default connect(null, mapDispatchToProps)(CreateCategoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBlack,
  },
});
