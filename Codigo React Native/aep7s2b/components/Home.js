import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { Card, Title, Button } from 'react-native-paper';
import axios from 'axios';
import Lista from './Lista';


export default function Home({ navigation }) {

  const [produtoUm, setProdutoUm] = useState([]);
  const [produtoDois, setProdutoDois] = useState([]);
  const [produtoTres, setProdutoTres] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://8081-beatrizferraz-aularest-1z5bw1ku55m.ws-us47.gitpod.io/produto/18'
      )
      .then((response) => setProdutoUm(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://8081-beatrizferraz-aularest-1z5bw1ku55m.ws-us47.gitpod.io/produto/9'
      )
      .then((response) => setProdutoDois(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://8081-beatrizferraz-aularest-1z5bw1ku55m.ws-us47.gitpod.io/produto/23'
      )
      .then((response) => setProdutoTres(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.cardContainer}>
        <Card>
          <Card.Cover source={require('../assets/images/card-promo.png')} />
        </Card>
      </TouchableOpacity>

      <Text
        style={{
          margin: 5,
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}>
        DESTAQUES
      </Text>

      <Lista
        produtoImg={produtoUm.imgUrl}
        produtoNome={produtoUm.nome}
        produtoPreco={produtoUm.preco}
      />

      <Lista
        produtoImg={produtoDois.imgUrl}
        produtoNome={produtoDois.nome}
        produtoPreco={produtoDois.preco}
      />

      <Lista
        produtoImg={produtoTres.imgUrl}
        produtoNome={produtoTres.nome}
        produtoPreco={produtoTres.preco}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    padding: 3,
  },
  cardContainer: {
    margin: 5,
    marginTop: 10,
    marginBottom: 15,
  },
});
