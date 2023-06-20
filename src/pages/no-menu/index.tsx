import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { Header } from '../../components/header'
import { Image, Text, View } from 'react-native'

const logo = require('../../../assets/building.png')

export const NoMenu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.msgContainer}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.text}>
          Lamento, mas ainda não há nenhum cardápio disponível
        </Text>
      </View>
    </SafeAreaView>
  )
}
