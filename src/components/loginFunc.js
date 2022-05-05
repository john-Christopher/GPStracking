import React from 'react';

import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

function LoginFunction(user, pwd, navigation){
  auth()
    .signInWithEmailAndPassword(user, pwd)
    .then(() => {
      navigation.navigate({
        name: 'Home'
      })
      console.log("Login Success")
    })
    .catch(err => {
      console.log("Login Error")

      Alert.alert(
        "Login Error",
        "Email or Password is incorrect",
        [
          {
            text: "Ok",
            onPress: () => console.log("Ok")
          }
        ]
      )
    })
}

export default LoginFunction;