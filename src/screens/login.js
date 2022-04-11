import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Icon } from "react-native-elements";

function LoginScreen({navigation}) {
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
              Username:
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
          <Pressable style={styles.btnBtn} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.btnTxt}>
              Login
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
  },
  btnBtn: {
    backgroundColor: "#05f",
    padding: 7,
    borderRadius: 5,
    width: 50,
  },
  btnTxt: {
    color: "#fff",
    textAlign: "center",
  }
})

export default LoginScreen;