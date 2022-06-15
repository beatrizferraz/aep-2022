import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { BottomNavigation, Button } from 'react-native-paper';

import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import Pedidos from './Pedidos';

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'search', title: 'Busca', icon: 'paw'},
    {key: 'orders', title: 'Pedidos', icon: 'ticket'},
    {key: 'profile', title: 'Perfil', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    profile: Profile,
    search: Search,
    orders: Pedidos,
  });

  return(
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#65188a' }}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    height: '100%',
  },
});