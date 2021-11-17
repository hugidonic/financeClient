import React from "react";
import {
  DrawerItem,
  DrawerItemList,
  DrawerView,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";
// Icons
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import userData from "./../../data/userData";
import { connect } from "react-redux";
import { InitStateType } from "../../redux/reduxTypes";
import { clearLocalStorage } from "./../../redux/actions/operationActions";

/**
  TODO : Change Icons to one style
 */
const userInfo = userData;
const iconSize = 24;

type Props = {
  navigation: DrawerContentComponentProps["navigation"];
  currentMoney: number;
};

const CustomDrawer = (props: Props) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.container}
      {...props}
    >
      {/* Drawer Header */}
      <View style={styles.drawerHeader}>
        <Image source={{ uri: userInfo.pictureUri }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.headerName}>{userInfo.name}</Text>
          <Text style={styles.headerMoney}>
            Остаток: {props.currentMoney} ₽
          </Text>
        </View>
      </View>

      {/* Drawer Middle items */}
      <View style={{ flex: 9, marginTop: 20 }}>
        <DrawerItem
          label="Диаграмма"
          labelStyle={styles.labelStyle}
          icon={() => (
            <FontAwesome name="pie-chart" size={iconSize} color="#fff" />
          )}
          onPress={() => props.navigation.navigate("Diagram")}
        />
        <DrawerItem
          label="Счета"
          labelStyle={styles.labelStyle}
          icon={() => (
            <MaterialCommunityIcons name="bank" size={iconSize} color="#fff" />
          )}
          onPress={() => props.navigation.navigate("AllAccounts")}
        />
        <DrawerItem
          label="Настройки"
          labelStyle={styles.labelStyle}
          icon={() => (
            <MaterialIcons name="settings" size={iconSize} color="#fff" />
          )}
          onPress={() => props.navigation.navigate("Settings")}
        />
        <DrawerItem
          label="Установить пароль"
          labelStyle={styles.labelStyle}
          icon={() => (
            <MaterialCommunityIcons
              name="key-variant"
              size={iconSize}
              color="#fff"
            />
          )}
          onPress={() => props.navigation.navigate("CreatePassword")}
        />
        <DrawerItem
          label="Clear storage"
          labelStyle={styles.labelStyle}
          icon={() => (
            <FontAwesome name="envelope" size={iconSize} color="#fff" />
          )}
          onPress={() => clearLocalStorage()}
        />
      </View>

      {/* Drawer Footer Items */}
      <View style={{ flex: 3 }}>
        <DrawerItem
          label="О приложении"
          labelStyle={styles.labelStyle}
          icon={() => (
            <MaterialIcons name="smartphone" size={iconSize} color="#fff" />
          )}
          onPress={() => props.navigation.navigate("AboutUs")}
        />
        <DrawerItem
          label="Связь с разработчиком"
          labelStyle={styles.labelStyle}
          icon={() => (
            <FontAwesome name="envelope" size={iconSize} color="#fff" />
          )}
          onPress={() => props.navigation.navigate("ContactUs")}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const mapStateToProps = (state: InitStateType) => ({
  currentMoney: state.operation.currentMoney,
});

export default connect(mapStateToProps)(CustomDrawer);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundBlue,
    flex: 1,
  },
  labelStyle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "normal",
    marginLeft: -15,
  },
  drawerHeader: {
    flex: 1,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,

    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: colors.white,
    borderWidth: 1,
    resizeMode: "cover",
  },
  headerInfo: {
    marginLeft: 15,
  },
  headerName: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 5,
  },
  headerMoney: {
    color: "#fff",
    fontSize: 18,
  },
});
