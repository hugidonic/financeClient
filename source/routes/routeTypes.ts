import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { CategoryType, OperationChooseType } from "../redux/reduxTypes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}

export type AllScreens =
  | keyof CategoryStackParamList
  | keyof NavigationDrawerParamList
  | keyof OperationsStackParamList;


/**
 * Main
 */
export type MainStackParamList = {
  Drawer: NavigatorScreenParams<NavigationDrawerParamList>;
  Category: NavigatorScreenParams<CategoryStackParamList>;
  Operations: NavigatorScreenParams<OperationsStackParamList>;
};

/**
 * Category
 */
export type CategoryStackParamList = {
  AllCategories: {
    operationType: OperationChooseType;
  };
  CreateCategory: undefined;
};

export type AllCategoriesScreenProps = NativeStackScreenProps<
  CategoryStackParamList,
  "AllCategories"
>

/**
 * Operation
 */

export type NavigationDrawerParamList = {
  Diagram: undefined;

  Profile: undefined;
  AllAccounts: undefined;
  Settings: undefined;

  ContactUs: undefined;
  CreatePassword: undefined;
  AboutUs: undefined;
};

/**
 * Operation types
 */
export type OperationsStackParamList = {
  AddOperation: undefined;
  AllOperations: undefined;
};

export type AddOperationScreenProps = NativeStackScreenProps<
  OperationsStackParamList,
  'AddOperation'
>
export type AllOperationsScreenProps = NativeStackScreenProps<
  OperationsStackParamList,
  'AllOperations'
>

/**
 * Screen Props
 */

export type DrawerStackScreenProps = NativeStackScreenProps<
  MainStackParamList,
  "Drawer"
>;

export type CategoryStackScreenProps = NativeStackScreenProps<
  MainStackParamList,
  "Category"
>;
export type OperationsStackScreenProps = NativeStackScreenProps<
  MainStackParamList,
  "Operations"
>;

/**
 * Navigation props
 */
export type DiagramScreenNavigationProp = CompositeScreenProps<
  DrawerStackScreenProps,
  DrawerHeaderProps
>;