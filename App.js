import React from "react";
// import Modal from "./components/Modal";
// import Logo from "./components/Logo";
// import fonts from "./src/global/fonts";
// import { useFonts } from "expo-font";
import MainNavigator from './src/navigation/MainNavigator'
import Login from "./src/screens/Login";
import InitialPage from "./src/components/InitialPage/InitialPage";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from './src/store'

import BottomTabNavigator from "./src/navigation/BoottonTabNavigator";


export const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <InitialPage />
      </NavigationContainer>

    </Provider>
  )
}

export default App