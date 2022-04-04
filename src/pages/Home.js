import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import { Header } from '../components/Header'
import { HeaderList } from '../components/HeaderList'
import { Input } from '../components/Input'

export default function Home() {
  const [produto, setProduto] = useState('')
  const [qtd, setQtd] = useState(0)
  const [valor, setValor] = useState(0)

  function handleSubmit() {
    const count = 0

    const newProduto = {
      id: count++,
      produto,
      qtd,
      valor
    }

    console.log(newProduto)
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Header />
      <Text style={styles.title}>Incluir Produto</Text>
      <View style={styles.card}>
        <Input
          label='Produto'
          placeholder='Nome do Produto'
          onChangeText={setProduto}
          value={produto}
        />
        <Input
          label='Quantidade'
          placeholder='Quantidade no Estoque'
          onChangeText={setQtd}
          value={qtd}
        />
        <Input
          label='Valor'
          placeholder='Valor Unitario'
          onChangeText={setValor}
          value={valor}
        />

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.textBtn}>Incluir</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Lista de Produtos</Text>
      <HeaderList />
      <ScrollView></ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    marginTop: 20,
    fontFamily: 'Inter_600SemiBold'
  },
  card: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FCF6F9'
  },
  btn: {
    width: '60%',
    margin: 5,
    alignItems: 'center',
    borderRadius: 20,
    padding: 8,
    backgroundColor: '#212121'
  },
  textBtn: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold'
  }
})
