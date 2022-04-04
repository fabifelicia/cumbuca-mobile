import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { Header } from '../components/Header'
import { Form } from '../components/Form'

export default function Home() {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Header /> 
      <Text style={styles.title}>Incluir Produto</Text>     
      <Form />
      <Text style={styles.title}>Lista de Produtos</Text>     
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
  }
})
