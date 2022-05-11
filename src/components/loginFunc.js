import React from 'react';

import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

function LoginFunction(user, pwd, navigation, route){
  auth()
    .signInWithEmailAndPassword(user, pwd)
    .then(() => {
      if(user !== 'admin@email.com'){
        navigation.navigate({
          name: 'HomeUser',
          params: {user: user}
        })
        console.log("Login Success ", user)
      }else{
        navigation.navigate({
          name: 'Home',
          params: {user: user}
        })
        console.log("Login Success ", user)
      }
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