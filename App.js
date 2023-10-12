import React from "react";
// import Modal from "./components/Modal";
// import Logo from "./components/Logo";
// import fonts from "./src/global/fonts";
// import { useFonts } from "expo-font";
import MainNavigator from './src/navigation/MainNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from './src/store'
import BottomTabNavigator from "./src/navigation/BoottonTabNavigator";

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <MainNavigator/> */}
        <BottomTabNavigator/>

      </NavigationContainer>

    </Provider>
  )
}

export default App