import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading'
import { Header } from './src/components/Header'
import { Form } from './src/components/Form'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Header /> 
      <Text style={styles.title}>Incluir Produto</Text>     
      <Form />
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
