import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Input } from './Input'

export function Form() {
  const [produto, setProduto] = useState('')
  const [qtd, setQtd] = useState(0)
  const [valor, setValor] = useState(0)
  
  
  async function handleSubmit() {
    try {
      const id = (await (AsyncStorage.getItem('@cumbucamobile:saveproducts'))).length  + 1
  
      const newProduto = { 
        id,     
        produto,
        qtd,
        valor
      }
  
      await AsyncStorage.setItem('@cumbucamobile:saveproducts', JSON.stringify(newProduto))
      console.log(newProduto)

    } catch (error) {      
      console.log(error)      
    }
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
