import React from "react";
// import Modal from "./components/Modal";
// import Logo from "./components/Logo";
// import fonts from "./src/global/fonts";
// import { useFonts } from "expo-font";
import Navigator from './src/navigation/Navigator'
import { Provider } from "react-redux";
import store from './src/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Navigator/>

    </Provider>
  )
}

export default App