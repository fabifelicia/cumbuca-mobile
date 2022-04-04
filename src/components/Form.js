import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Input } from './Input'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Form() {
  const [produto, setProduto] = useState('')
  const [qtd, setQtd] = useState(0)
  const [valor, setValor] = useState(0)

  function handleSubmit() {
    const newProduto = {
      produto,
      qtd,
      valor
    }

    console.log(newProduto)
  }

  return (
    <View style={styles.card}>
      <Input
        label='Produto'
        placeholder='Nome do Produto'
        onChangeText={setProduto}
        
      />
      <Input
        label='Quantidade'
        placeholder='Quantidade no Estoque'
        onChangeText={setQtd}
        
      />
      <Input
        label='Valor'
        placeholder='Valor Unitario'
        onChangeText={setValor}
        
      />

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.textBtn}>Incluir</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
