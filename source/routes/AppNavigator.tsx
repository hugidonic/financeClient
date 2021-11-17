// Native stacks
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// Route Types
import {
  CategoryStackParamList,
  MainStackParamList,
  NavigationDrawerParamList,
  OperationsStackParamList,
} from "./routeTypes";
// Drawer
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./../components/Drawer/CustomDrawer";

// Main Screens
import DiagramScreen from "./../pages/Main/DiagramScreen";

/**
 * Category screens
 */
import AllCategoriesScreen from "./../pages/Category/AllCategories/AllCategoriesScreen";
import CreateCategoryScreen from "./../pages/Category/CreateCategory/CreateCategoryScreen";
/**
 * Navigation screens
 */
import AboutUsScreen from "../pages/Navigation/AboutUsScreen";
import AllAccountsScreen from "./../pages/Navigation/AllAccountsScreen";
import ContactUsScreen from "./../pages/Navigation/ContactUsScreen";
import CreatePasswordScreen from "./../pages/Navigation/CreatePasswordScreen";
import ProfileScreen from "./../pages/Navigation/ProfileScreen";
import SettingsScreen from "./../pages/Navigation/SettingsScreen";
// Operations screens
import AddOperationScreen from "../pages/Operations/AddOperation/AddOperationScreen";
import AllOperationsScreen from "../pages/Operations/AllOperations/AllOperationsScreen";

/**
 * Main stack contains:
 *  Drawer Stack
 *  Category Stack
 *  Operations Stack
 */
const Stack = createNativeStackNavigator<MainStackParamList>();

/**
 * Category stack contains:
 *  AddCategory screen
 *  AllCategories screen
 *  CreateCategory screen
 */
const CategoryStack = createNativeStackNavigator<CategoryStackParamList>();
/**
 * Operations stack contains:
 *  AllOperations screen
 *  AddOperation screen
 */
const OperationsStack = createNativeStackNavigator<OperationsStackParamList>();

/**
 * Navigation drawer contains:
 *  Profile screen
 *  Diagram screen
 *  AllAccounts screen
 *  Main stack
 *  Settings screen
 *  CreatePassword screen
 *  AboutUs screen
 *  ContactUs screen
 */
const NavigationDrawer = createDrawerNavigator<NavigationDrawerParamList>();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    // initialRouteName="Category"
  >
    <Stack.Screen name="Drawer" component={AppDrawer} />

    <Stack.Screen name="Category" component={CategoryStackScreens} />
    <Stack.Screen name="Operations" component={OperationsStackScreens} />
  </Stack.Navigator>
);

/**
 * Main App navigator root
 */
const AppDrawer = () => {
  return (
    <NavigationDrawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Diagram"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <NavigationDrawer.Screen name="Diagram" component={DiagramScreen} />
      <NavigationDrawer.Screen name="Profile" component={ProfileScreen} />

      <NavigationDrawer.Screen
        name="AllAccounts"
        component={AllAccountsScreen}
      />
      <NavigationDrawer.Screen name="Settings" component={SettingsScreen} />
      <NavigationDrawer.Screen
        name="CreatePassword"
        component={CreatePasswordScreen}
      />
      <NavigationDrawer.Screen name="AboutUs" component={AboutUsScreen} />
      <NavigationDrawer.Screen name="ContactUs" component={ContactUsScreen} />
    </NavigationDrawer.Navigator>
  );
};

/**
 * Main stack screens
 */

/**
 * Category stack screens
 */
const CategoryStackScreens = () => {
  return (
    // TODO: REMOVE INIT SCREEN
    <CategoryStack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName="CreateCategory"
    >
      <CategoryStack.Screen
        name="AllCategories"
        component={AllCategoriesScreen}
      />
      <CategoryStack.Screen
        name="CreateCategory"
        component={CreateCategoryScreen}
      />
    </CategoryStack.Navigator>
  );
};

/**
 * Operations stack screens
 */
const OperationsStackScreens = () => {
  return (
    <OperationsStack.Navigator screenOptions={{ headerShown: false }}>
      <OperationsStack.Screen
        name="AddOperation"
        component={AddOperationScreen}
      />
      <OperationsStack.Screen
        name="AllOperations"
        component={AllOperationsScreen}
      />
    </OperationsStack.Navigator>
  );
};

export default AppNavigator;
