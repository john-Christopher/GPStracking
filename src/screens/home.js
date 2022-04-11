import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Dimensions, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

const autoHeight = Dimensions.get('window').height;

function HomeScreen({navigation}) {
  return(
    <View style={styles.mainContainer}>
      <View style={styles.menuContainer}>
        <View style={styles.menuHolder}>
          <Pressable style={styles.menuBtn} onPress={() => navigation.navigate('Home')}>
            <Icon name="home" type='material' color="#000" style={styles.menuIcon}/>
          </Pressable>
          <Pressable style={styles.menuBtn} onPress={() => navigation.navigate('Maps')}>
            <Icon name="place" type='material' color="#000" style={styles.menuIcon}/>
          </Pressable>
          <Pressable style={styles.menuBtn} onPress={() => navigation.navigate('Login')}>
            <Icon name="logout" type='material' color="#000" style={styles.menuIcon}/>
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.srchHolder}>
          <TextInput 
            placeholder='Search . . .'
            placeholderTextColor='#444'
            style={styles.srchInput}
          />
          <Pressable style={styles.srchBtn}>
            <Icon name="search" type='material' color="#000" style={styles.srchBtnIcon} />
          </Pressable>
        </View>
        
      </ScrollView>
      <FlatList 
        data={['Name', 'Motorcycle', 'Track']}
        renderItem={({item}) => {
          <View>
            <Text style={{color: "#000"}}>
              ASdad
            </Text>
          </View>
        }}
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
  }
})

export default HomeScreen;