import "react-native-gesture-handler";
import React from "react";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./routes/AppNavigator";
// Redux
import { Provider } from "react-redux";
import store from './redux/store';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "./utils/colors";

const App = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false)
  
  React.useEffect(()=> {
    (async function (){
      const arr = await AsyncStorage.getAllKeys()
      let flag = false;
      arr.forEach((s) => {
        if (s == 'allOperations') {
          flag = true
        }
      })
      
      if (!flag) {
        await AsyncStorage.setItem('allOperations', JSON.stringify([]))
      }

      console.log('here');
      
      setIsReady(true)
    })()
  }, [])

  if (!isReady) {
    return <View style={{flex: 1, backgroundColor: colors.backgroundBlack}} />
  }
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
