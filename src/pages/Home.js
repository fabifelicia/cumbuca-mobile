import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Header } from '../components/Header'
import { HeaderList } from '../components/HeaderList'
import { Form } from '../components/Form'


export default function Home() {
  const [data, setData] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Header />
      <Text style={styles.title}>Incluir Produto</Text>
      <Form />
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
