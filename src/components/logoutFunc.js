import React from 'react';

import auth from '@react-native-firebase/auth';

function LogoutFunction(navigation){
  auth()
    .signOut()
    .then(() => {
      navigation.navigate({
        name: 'Login'
      })
      console.log("Logout")
    })
}

export default LogoutFunction;