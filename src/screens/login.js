import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Icon } from "react-native-elements";

import LoginFunction from '../components/loginFunc';

function LoginScreen({navigation, route}) {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');


  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.txtHeader}>
          Motorcycle Android {'\n'} Based {'\n'} Alarm and Tracking
        </Text>
      </View>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Icon type='material' name="person" color='#000' size={24} style={styles.fieldIcon} />
            <Text style={styles.fieldTxt}>
              Email Address:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setUser}
            placeholder="Enter username here . . ."
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Icon name="vpn-key" type='material' color='#000' size={24} style={styles.fieldIcon} />
            <Text style={styles.fieldTxt}>
              Password:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setPwd}
            placeholder="Enter password here . . ."
            placeholderTextColor="#888"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnBottom}>
          <Pressable style={styles.btnBtn} onPress={() => LoginFunction(user, pwd, navigation, route)}>
            <Text style={styles.btnTxt}>
              Login
            </Text>
          </Pressable>
          <Pressable style={styles.btnBtn} onPress={() => navigation.navigate("Register")}>
            <Text style={styles.btnTxt}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: "center",
  },
  headerContainer: {
    marginTop: "25%",
  },
  txtHeader: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  fieldContainer: {
    alignSelf: "center",
    marginTop: "20%",
  },
  fieldGroup: {
    padding: 5,
    margin: 7,
  },
  IconTxt: {
    flexDirection: "row",
  },
  fieldTxt: {
    color: "#000",
    textAlignVertical: "center",
    padding: 5,
    fontSize: 16,
  },
  fieldInput: {
    padding: 5,
    borderBottomWidth: 1,
    color: "#000",
  },
  btnBottom: {
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row",
  },
  btnBtn: {
    backgroundColor: "#05f",
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
  },
  btnTxt: {
    color: "#fff",
    textAlign: "center",
  }
})

export default LoginScreen;