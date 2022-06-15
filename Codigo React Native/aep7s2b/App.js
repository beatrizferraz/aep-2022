import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { BottomNavigation } from 'react-native-paper';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Search from './components/Search';
import Pedidos from './components/Pedidos';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navbar"
          component={Navbar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
