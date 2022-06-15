import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default function Profile({ navigation }) {
  
  const [cliente, setCliente] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        'https://8081-beatrizferraz-aularest-1z5bw1ku55m.ws-us47.gitpod.io/cliente/9f3f0c94-443c-4225-bd69-8c1915d65f1e'
      )
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
          Perfil
        </Text>
      </View>

      <View style={styles.cardData}>
        <Text style={{ fontWeight: 'bold' }}>Dados pessoais: </Text>
        <br />
        <Text>Nome: {cliente.nome} </Text>
        <Text>CPF: {cliente.cpf} </Text>
        <Text>Telefone: {cliente.telefone} </Text>
        <Text>Email: {cliente.email} </Text>
        <Text>Senha: •••••••• </Text>
        <TouchableOpacity>
          <Icon
            style={{ display: 'flex', justifyContent: 'right' }}
            name="edit"
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardData}>
        <Text style={{ fontWeight: 'bold' }}>Endereços: </Text>
        <br />
        <Text>CEP: 87040500</Text>
        <Text>Bairro: Jardim Pinheiro </Text>
        <Text>Rua: Laguna </Text>
        <Text>Numero: 1001 </Text>
        <TouchableOpacity>
          <Icon
            style={{ display: 'flex', justifyContent: 'right' }}
            name="edit"
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardData}>
        <Text style={{ fontWeight: 'bold' }}>Meus Pets: </Text>
        <br />
        <Text>Nome: Lisa</Text>
        <Text>Espécie: Felina </Text>
        <br />
        <Text>Nome: Totoro </Text>
        <Text>Espécie: Canina </Text>
        <TouchableOpacity>
          <Icon
            style={{ display: 'flex', justifyContent: 'right' }}
            name="edit"
            size={25}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cardData: {
    backgroundColor: 'white',
    borderRadius: 10,
    outline: '2px solid #ea7d29',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 15,
    marginBottom: 10,
  },
});
