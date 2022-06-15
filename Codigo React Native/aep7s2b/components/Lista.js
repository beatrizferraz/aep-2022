import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

const Lista = ({ produtoId, produtoImg, produtoNome, produtoPreco, navigation }) => {
  
  const [produto, setProduto] = useState();

  useEffect(() => {
    axios
      .get(produtoImg)
      .then((response) => {
        setProduto(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [produtoImg]);

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.card}>
          <Image style={styles.img} source={{ uri: produtoImg }} />
          <View>
            <Text style={styles.nomeProduto}>{produtoNome}</Text>
            <Text style={styles.precoProduto}>R${produtoPreco}0</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Lista;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 5,
    outline: '0.1px solid gray',
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 5,
    flexDirection: 'row',
    height: 100,
    width: 300,
  },

  img: {
    height: '100%',
    width: '30%',
    borderRadius: 3,
    marginVertical: 5,
  },

  nomeProduto: {
    fontSize: 14,
    width: '200px',
  },

  precoProduto: {
    fontSize: 15,
  },
});
