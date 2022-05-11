import React, {useState, useEffect} from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, TextInput, FlatList, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';

import LogoutFunction from '../components/logoutFunc';

import firestore from '@react-native-firebase/firestore';

function HomeUserScreen({navigation, route}) {
  const user = route.params?.user;
  const [profile, setProfile] = useState([]);


  useEffect(() => {
    const subscriber = firestore()
      .collection('Profile')
      .where("Email", "==", user)
      .onSnapshot(querySnapshot => {
        const profile = [];
        
        querySnapshot.forEach(documentSnapshot => {
          profile.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setProfile(profile)
      })
    return () => subscriber();
  }, [])


  return(
    <View style={styles.mainContainer}>
      <View style={styles.menuContainer}>
        <View style={styles.menuHolder}>
          <Pressable style={styles.menuBtn} onPress={() => navigation.navigate('HomeUser')}>
            <Icon name="home" type='material' color="#000" style={styles.menuIcon}/>
          </Pressable>
          <Pressable style={styles.menuBtn} onPress={() => navigation.navigate({
            name: "Maps",
            params: {
              user: user
            }
          })}>
            <Icon name="place" type='material' color="#000" style={styles.menuIcon}/>
          </Pressable>
          <Pressable style={styles.menuBtn} onPress={() => LogoutFunction(navigation)}>
            <Icon name="logout" type='material' color="#000" style={styles.menuIcon}/>
          </Pressable>
        </View>
      </View>
        <FlatList 
          data={profile}
          renderItem={({ item }) => (
            <View style={styles.dataContainer}>
              <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>First Name: </Text>
                <Text style={styles.txtBody}>{item.FirstName}</Text>
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>Last Name: </Text>
                <Text style={styles.txtBody}>{item.LastName}</Text>
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>Address: </Text>
                <Text style={styles.txtBody}>{item.Address}</Text>
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>Registration Number: </Text>
                <Text style={styles.txtBody}>{item.RegNum}</Text>
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>Color: </Text>
                <Text style={styles.txtBody}>{item.Color}</Text>
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>Chassis Number: </Text>
                <Text style={styles.txtBody}>{item.ChassisNum}</Text>
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>Engine Number: </Text>
                <Text style={styles.txtBody}>{item.EngineNum}</Text>
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.txtTitle}>Email: </Text>
                <Text style={styles.txtBody}>{item.Email}</Text>
              </View>
            </View>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  menuContainer: {
    alignContent: "center",
    backgroundColor: "#00ff7f",
  },
  menuHolder: {
    marginTop: 150,
    justifyContent: "center",
  },
  menuBtn: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bodyContainer: {
    marginLeft: 15,
    marginTop: 25,
  },
  srchHolder: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  srchInput: {
    borderBottomWidth: 1,
    width: 150,
    marginRight: 10,
  },
  srchBtn: {
    backgroundColor: "#00ff7f",
    padding: 10,
    width: 50,
    borderRadius: 5,
  },
  dataContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
  },
  txtContainer: {
    alignSelf: "flex-start",
    flexDirection: "row",
    margin: 10,
    flexWrap: "wrap"
  },
  txtTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
    marginRight: 10,
  },
  txtBody: {
    color: "#000",
    fontSize: 16,
  }
})

export default HomeUserScreen;