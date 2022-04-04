import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading'
import Home from './src/pages/Home'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Home />
  )
}


