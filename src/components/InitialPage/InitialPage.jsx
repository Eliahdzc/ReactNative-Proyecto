import React from "react";
import Login from "../../screens/Login";
import BottomTabNavigator from "../../navigation/BoottonTabNavigator";
import { useSelector } from "react-redux";

const InitialPage = () => {
  const isLoggedIn = useSelector(state => state.auth.user)
  // const isLoggedIn = false
  console.log('loggedIn', isLoggedIn)
  return (
    <>
      {isLoggedIn ?
        <BottomTabNavigator /> :
        <Login />
      }
    </>
  )
}

export default InitialPage;