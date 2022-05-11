import React, {useState, useEffect} from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, TextInput, FlatList, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';

import LogoutFunction from '../components/logoutFunc';

import firestore from '@react-native-firebase/firestore';

function HomeScreen({navigation, route}) {
  const user = route.params?.user;
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Profile')
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
  }, []);



  return(
    <View style={styles.mainContainer}>
      <View style={styles.menuContainer}>
        <View style={styles.menuHolder}>
          <Pressable style={styles.menuBtn} onPress={() => navigation.navigate('Home')}>
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
      <View style={{flex: 1, flexDirection: "column", margin: 20,}}>
        <View style={{flexDirection: "row", width: 320, justifyContent: "flex-end"}}>
          <TextInput 
            placeholder='Search . . . '
            placeholderTextColor="#888"
            style={{borderBottomWidth: 2, width: 150, marginRight: 10,}}
          />
          <Icon name='search' type='material' color="#000" style={{backgroundColor: "#00ff7f", padding: 10, borderRadius: 7,}} size={32} />
        </View>
      </View>
      <FlatList 
          data={profile}
          renderItem={({ item }) => (
            <View style={styles.dataContainerAdmin}>
              <View style={styles.txtContainerAdmin}>
                <Text style={styles.txtTitleAdmin}>Name</Text>
                <Text style={styles.txtTitleAdmin}>Registration Number</Text>
                <Text style={styles.txtTitleAdmin}>Address</Text>
              </View>
              <View style={styles.txtContainerAdmin}>
                <Text style={styles.txtBodyAdmin}>{item.FirstName} {item.LastName}</Text>
                <Text style={styles.txtBodyAdmin}>{item.RegNum}</Text>
                <Text style={styles.txtBodyAdmin}>{item.Address}</Text>
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
  dataContainerAdmin: {
    marginTop: 100,
  },
  txtContainerAdmin: {
    flexDirection: "row",
    margin: 10,
  },
  txtTitleAdmin: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    width: 100,
  },
  txtBodyAdmin: {
    color: "#000",
    fontSize: 16,
    flexWrap: "wrap",
    width: 100,
  },
  
})

export default HomeScreen;