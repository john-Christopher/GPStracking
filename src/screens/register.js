import React, {useState} from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Icon } from "react-native-elements";

function RegisterScreen ({navigation, route}) {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [conpwd, setConPwd] = useState('');

  return(
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.txtHeader}>
          Register Here
        </Text>
      </View>
      <View style={styles.fieldContainer}>
      <Text style={styles.fieldTitle}>Personal Information</Text>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Text style={styles.fieldTxt}>
              First Name:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setUser}
            placeholder="Enter first name here . . ."
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Text style={styles.fieldTxt}>
              Last Name:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setPwd}
            placeholder="Enter last name here . . ."
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Text style={styles.fieldTxt}>
              Complete address:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setConPwd}
            placeholder="Enter address here . . ."
            placeholderTextColor="#888"
          />
        </View>
        <Text style={styles.fieldTitle}>{'\n'}Motorcycle Information</Text>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Text style={styles.fieldTxt}>
              Registration number:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setUser}
            placeholder="Enter registration number here . . ."
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Text style={styles.fieldTxt}>
              Color:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setPwd}
            placeholder="Enter color here . . ."
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Text style={styles.fieldTxt}>
              Chassis Number:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setConPwd}
            placeholder="Enter chassis number here . . ."
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Text style={styles.fieldTxt}>
              Engine Number:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setConPwd}
            placeholder="Enter engine number here . . ."
            placeholderTextColor="#888"
          />
        </View>
        <Text style={styles.fieldTitle}>{'\n'}Account Information</Text>
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
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
        <View style={styles.fieldGroup}>
          <View style={styles.IconTxt}>
            <Text style={styles.fieldTxt}>
              Confirm Password:
            </Text>
          </View>
          <TextInput 
            style={styles.fieldInput}
            onChangeText={setConPwd}
            placeholder="Confirm password here . . ."
            placeholderTextColor="#888"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnBottom}>
          <Pressable style={styles.btnBtn}>
            <Text style={styles.btnTxt}>
              Register
            </Text>
          </Pressable>
          <Pressable style={styles.btnBtn} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.btnTxt}>
              Cancel
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
    marginTop: "10%",
  },
  fieldTitle: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#000"
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

export default RegisterScreen;