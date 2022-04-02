import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Header } from './src/components/Header'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Header />
      <Text style={{ color: '#000', padding: 10 }}>Formulario</Text>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
})
