import { ScrollView } from 'react-native'
import { HomeScreen } from './src/home'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { theme } from './theme'

export default function App() {
  return (
    <SafeAreaProvider>
        <ScrollView style={{ backgroundColor: theme.palette.blue.dark }}>
          <HomeScreen />
        </ScrollView>
    </SafeAreaProvider>
  )
}
