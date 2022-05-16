import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Dimensions, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { enableLatestRenderer } from 'react-native-maps';


const autoHeight = Dimensions.get('window').height;

enableLatestRenderer();

function MapScreen({navigation, route}) {
  const user = route.params?.user;

  return(
    <View style={styles.mainContainer}>
      <View style={styles.menuContainer}>
        <View style={styles.menuHolder}>
          <Pressable style={styles.menuBtn} onPress={() => {{
              if(user == 'admin@email.com'){
                navigation.navigate({
                  name: "Home",
                  params: {
                    user: user
                  }
                })
              }else{
                navigation.navigate({
                  name: "HomeUser",
                  params: {
                    user: user,
                  }
                })
              }
            }
          }}>
            <Icon name="home" type='material' color="#000" style={styles.menuIcon}/>
          </Pressable>
          <Pressable style={styles.menuBtn} onPress={() => navigation.navigate("Maps")}>
            <Icon name="place" type='material' color="#000" style={styles.menuIcon}/>
          </Pressable>
          <Pressable style={styles.menuBtn} onPress={() => navigation.navigate('Login')}>
            <Icon name="logout" type='material' color="#000" style={styles.menuIcon}/>
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.bodyContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude:  	13.320961,
          longitude: 123.505602,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      </ScrollView>
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
    height: autoHeight,
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
    marginTop: 80,
    marginLeft: 10,
  },
  map: {
    height: 500,
    width: 300,
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
  }
})

export default MapScreen;