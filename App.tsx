import { ScrollView, Text } from 'react-native'
import { HomeScreen } from './src/home'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { theme } from './theme'
import { RecoilRoot } from 'recoil'
import { Suspense } from 'react'
import { Loading } from './src/components/loading'

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading/>}>
        <SafeAreaProvider>
          <ScrollView style={{ backgroundColor: theme.palette.blue.dark }}>
            <HomeScreen />
          </ScrollView>
        </SafeAreaProvider>
      </Suspense>
    </RecoilRoot>
  )
}
