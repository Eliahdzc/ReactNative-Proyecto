import { Pressable, TouchableOpacity, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { useNavigation } from '@react-navigation/native';

// import { insertSession } from '../../db'
// import { setUser } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
// import { useLoginMutation } from '../../services/authApi'
import styles from './Login.styles'
import { setUser } from '../features/auth/authSlice';
import Principal from './Principal.js'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()


  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const navigation = useNavigation()
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log('Account created!', res);
      // TODO enviar a store el usuario creado
      dispatch(setUser({
        email: res['email'],
        idToken: res.stsTokenManager,
        localId: res.uid
      }))
    })
    .catch((error) => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log('Signed in!', res);


      dispatch(setUser({
        email: res.user['email'],
        idToken: res["_tokenResponse"].idToken,
        localId: res.user.uid
      }))
      // navigation.navigate('Principal')

    })
    .catch((error) => {
      console.log(error)

    })
  }


  // const [triggerLogin, result] = useLoginMutation()
  // const dispatch = useDispatch()

  // const onSubmit = () => {
  //   //console.log(email, password)
  //   triggerLogin({
  //     email,
  //     password,
  //   })
  //   //console.log(result)
  //   if (result.isSuccess) {
  //     dispatch(setUser(result.data))
  //     insertSession({
  //       localId: result.data.localId,
  //       email: result.data.email,
  //       token: result.data.idToken,
  //     })
  //       .then(result => console.log(result))
  //       .catch(error => console.log(error.message))
  //   }
  // }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Login to start</Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          placeholder="Ingresa tu correo electronico"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          placeholder="Ingresa tu password"
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <Text>No have an account?</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleCreateAccount}
        >
          <Text style={{ color: 'white' }}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login
