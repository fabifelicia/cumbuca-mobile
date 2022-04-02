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
      <Input title='Qtd' placeholder='Quantidade no Estoque' />     
      <Input title='Valor' placeholder='Valor Unitario' />     

      <TouchableOpacity style={styles.btn}>
        <Text>Incluir</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width:'90%',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FCF6F9' 

  },
  btn: {

  }
})
