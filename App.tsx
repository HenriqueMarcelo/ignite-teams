import { Groups } from '@screens/Groups'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { ActivityIndicator } from 'react-native'

export default function App() {
  const [frontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      {frontsLoaded ? <Groups /> : <ActivityIndicator />}
      <StatusBar style="light" />
    </ThemeProvider>
  )
}
