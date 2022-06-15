import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { Card, Searchbar, List } from 'react-native-paper';
import Lista from './Lista';

import axios from 'axios';

export default function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const [produtosList, setProdutosList] = useState([]);
  const [lojasList, setLojasList] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://8081-beatrizferraz-aularest-1z5bw1ku55m.ws-us47.gitpod.io/produto/'
      )
      .then((response) => {
        setProdutosList(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Searchbar
        placeholder="Busca"
        inputStyle={{ outline: 'none' }}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      {produtosList.map((produto) => {
        return (
          <Lista
            key={produto.id}
            produtoImg={produto.imgUrl}
            produtoNome={produto.nome}
            produtoPreco={produto.preco}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    padding: 3,
  },
});
