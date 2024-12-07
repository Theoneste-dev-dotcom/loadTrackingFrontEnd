/* eslint-disable prettier/prettier */
import {  } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenerateQR from './components/GenerateQR';
import Scanner from './components/Scanner';
const Stack = createNativeStackNavigator();
const App = () => {

  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="generate" component={GenerateQR} />
      <Stack.Screen name="scan" component={Scanner} />
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({})
