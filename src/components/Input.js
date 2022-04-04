import { Text, TextInput, View, StyleSheet } from 'react-native'
import React from 'react'

export function Input(props) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.textInput} placeholder={props.placeholder} />
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    margin: 5
  },
  label: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#FF949E',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    width: '70%'
  }
})
