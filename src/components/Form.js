import React from 'react'
import {
  View,
  Text,  
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Input } from './Input'

export function Form() {
  return (
    <View style={styles.card}>
      <Input title='Produto' placeholder='Nome do Produto' />     
      <Input title='Quantidade' placeholder='Quantidade no Estoque' />     
      <Input title='Valor' placeholder='Valor Unitario' />     

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Incluir</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width:'90%',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FCF6F9' 

  },
  btn: {
    width:'60%',
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
