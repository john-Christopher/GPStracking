import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import MapScreen from './src/screens/map';
import RegisterScreen from './src/screens/register';

const Stack = createNativeStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: "Homepage",
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "#00ff7f"
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16,
            }
          }}
        />
        <Stack.Screen 
          name="Maps" 
          component={MapScreen}
          options={{
            title: "GPS and Tracking",
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "#00ff7f"
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;