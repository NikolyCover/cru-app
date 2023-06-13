import { Image, View } from 'react-native'
import { styles } from './style'

const logo = require('../../assets/logo.png')

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
    </View>
  )
}
