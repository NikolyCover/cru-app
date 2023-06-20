import { ScrollView, Text } from 'react-native'
import { HomeScreen } from './src/home'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { theme } from './theme'
import { RecoilRoot } from 'recoil'
import { Suspense } from 'react'

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Text>Loading</Text>}>
        <SafeAreaProvider>
          <ScrollView style={{ backgroundColor: theme.palette.blue.dark }}>
            <HomeScreen />
          </ScrollView>
        </SafeAreaProvider>
      </Suspense>
    </RecoilRoot>
  )
}
