import React from 'react';
import { Alert } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import regAccount from './regAccountFunc';

function ProfileReg(fname, lname, address, regNum, color, chasNum, engNum, email, pwd, conf, navigation){
  if(conf === pwd) {
    firestore()
      .collection('Profile')
      .add({
        FirstName: fname,
        LastName: lname,
        Address: address,
        RegNum: regNum,
        Color: color,
        ChassisNum: chasNum,
        EngineNum: engNum,
        Email: email,
        Password: pwd,
      })
      .then(() => {
        Alert.alert(
          "Registration Success",
          "Successfully added your profile, you can now login your account.",
          [
            {
              text: "Done",
              onPress: () =>{
                console.log("Done")
              }
            }
          ]
        )
      })
      .catch(err => {
        Alert.alert(
          "Registration Failed",
          "Please check your information and try again",
          [
            {
              text: "Ok",
              onPress: () => console.error("OK", err)
            }
          ]
        )
      })
  }else{
    Alert.alert(
      "Password do not match",
      "The password you entered do not match, please try again",
      [
        {
          text: "Ok",
          onPress: () => console.log("Password do not match")
        }
      ]
    )
  }
}

export default ProfileReg;