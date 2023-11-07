import React from "react";
import InitialPage from "./src/components/InitialPage/InitialPage";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from './src/store'
import 'react-native-gesture-handler';



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