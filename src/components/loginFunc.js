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
      const attempt = 1;

      if(attempt == 3){
        Alert.alert(
          "Login Attempt "+attempt,
          "Email or Password is incorrect",
          [
            {
              text: "Ok",
              onPress: () => console.log("Ok")
            }
          ]
        )
        attempt+=1;
      }else{
        Alert.alert(
          "Login Attempt "+attempt,
          "Email or Password is incorrect",
          [
            {
              text: "Ok",
              onPress: () => console.log("Ok")
            }
          ]
        )
        attempt+=1;
      }
      
    })
}

export default LoginFunction;