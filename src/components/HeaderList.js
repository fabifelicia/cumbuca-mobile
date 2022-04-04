import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export function HeaderList() {
  return (
    <View style={styles.headerList}>
      <Text>ID</Text>
      <Text>Produto</Text>
      <Text>Qtd</Text>
      <Text>Valor Unitário</Text>
      <Text>Valor Total</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerList: {
        width: '90%',        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})