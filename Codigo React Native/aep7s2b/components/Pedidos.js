import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default function Pedido() {
  const [pedidoUm, setPedidoUm] = useState([]);
  const [pedidoDois, setPedidoDois] = useState([]);
  const [pedidoTres, setPedidoTres] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://8081-beatrizferraz-aularest-1z5bw1ku55m.ws-us47.gitpod.io/pedido/55ac0c2b-9343-4bc3-9215-f0c4548e6cae'
      )
      .then((response) => {
        setPedidoUm(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://8081-beatrizferraz-aularest-1z5bw1ku55m.ws-us47.gitpod.io/pedido/5439c791-67ef-4d3d-9aed-28a7f1b95f5d'
      )
      .then((response) => {
        setPedidoDois(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://8081-beatrizferraz-aularest-1z5bw1ku55m.ws-us47.gitpod.io/pedido/ad47afc1-2408-47f6-a253-bd4c0d4516ef'
      )
      .then((response) => {
        setPedidoTres(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
          Pedidos
        </Text>
      </View>

      <View style={styles.cardData}>
        <Text>Status: {pedidoUm.status} </Text>
        <Text>Tipo de pagamento: {pedidoUm.tipoPagamento} </Text>
        <Text>Total do pedido: R${pedidoUm.valorTotal}0 </Text>
        <Text>Taxa de entrega: R${pedidoUm.taxaEntrega}0 </Text>
        <Text>Valor final: R${pedidoUm.valorFinalPedido}0 </Text>
        <TouchableOpacity>
          <Text
            style={{
              display: 'flex',
              justifyContent: 'right',
              fontWeight: 'bold',
            }}>
            Ver mais
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardData}>
        <Text>Status: {pedidoDois.status} </Text>
        <Text>Tipo de pagamento: {pedidoDois.tipoPagamento} </Text>
        <Text>Total do pedido: R${pedidoDois.valorTotal}0 </Text>
        <Text>Taxa de entrega: R${pedidoDois.taxaEntrega}0 </Text>
        <Text>Valor final: R${pedidoDois.valorFinalPedido}0 </Text>
        <TouchableOpacity>
          <Text
            style={{
              display: 'flex',
              justifyContent: 'right',
              fontWeight: 'bold',
            }}>
            Ver mais
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardData}>
        <Text>Status: {pedidoTres.status} </Text>
        <Text>Tipo de pagamento: {pedidoTres.tipoPagamento} </Text>
        <Text>Total do pedido: R${pedidoTres.valorTotal}0 </Text>
        <Text>Taxa de entrega: R${pedidoTres.taxaEntrega}0 </Text>
        <Text>Valor final: R${pedidoTres.valorFinalPedido}0 </Text>
        <TouchableOpacity>
          <Text
            style={{
              display: 'flex',
              justifyContent: 'right',
              fontWeight: 'bold',
            }}>
            Ver mais
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardData}>
        <Text>Status: {pedidoTres.status} </Text>
        <Text>Tipo de pagamento: {pedidoTres.tipoPagamento} </Text>
        <Text>Total do pedido: R${pedidoTres.valorTotal}0 </Text>
        <Text>Taxa de entrega: R${pedidoTres.taxaEntrega}0 </Text>
        <Text>Valor final: R${pedidoTres.valorFinalPedido} </Text>
        <TouchableOpacity>
          <Text
            style={{
              display: 'flex',
              justifyContent: 'right',
              fontWeight: 'bold',
            }}>
            Ver mais
          </Text>
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
    outline: '0.1px solid gray',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 15,
    marginBottom: 5,
  },
});
