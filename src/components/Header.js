import { TextInput, StyleSheet } from 'react-native'
import React from 'react'

export function Header() {
  return (
    <TextInput
      style={styles.input}
      placeholder='Buscar Produto'
      placeholderTextColor='#ccc'
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '85%',
    marginTop: 50,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000'
  }
})
