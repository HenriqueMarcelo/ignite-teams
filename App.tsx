import { Groups } from '@screens/Groups'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'
import { NewGroup } from '@screens/NewGroup'
import { Players } from '@screens/Players'

export default function App() {
  const [frontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      {/* {frontsLoaded ? <Groups /> : <Loading />} */}
      {/* {frontsLoaded ? <NewGroup /> : <Loading />} */}
      {frontsLoaded ? <Players /> : <Loading />}
      <StatusBar style="light" />
      {/* <StatusBar style="light" backgroundColor="transparent" translucent /> */}
    </ThemeProvider>
  )
}
