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
  const [userName, setUserName] = useState('')
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
        localId: res.uid,
        userName
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
        localId: res.user.uid,
        userName
      }))
      // navigation.navigate('Principal')

    })
    .catch((error) => {
      console.log(error)

    })
  }

  const usuario = () => {
    nombreDeUsuario(userName)
    .then((res) => {
      console.log('nombre', res);
    })
    .catch((error) => {
      console.log('ese nombre no le gusta', error)
  })
}


 
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.texto}>Inicia sesión</Text>
        <TextInput
          style={styles.inputEmail}
          value={userName}
          placeholder="Ingresa tu nombre de usuario"
          onChangeText={(text) => setUserName(text)}
        />
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
        <Text style={styles.texto}>Nuevo Registro</Text>
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
