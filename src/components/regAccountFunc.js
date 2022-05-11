import React from 'react';
import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';

function regAccount(email, pwd, conf, navigation){
  if(conf === pwd) {
    auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then(() => console.log("registration success"))
  }
}

export default regAccount;