import { Image, Text, View } from 'react-native'
import { styles } from './style'

const milk = require('../../../assets/milk.png')
const meat = require('../../../assets/meat.png')

interface Props {}

export const Warnings: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avisos:</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.card} >
          <Image source={milk} style={styles.image} />
          <Text style={styles.label} >Contém leite</Text>
        </View>
        <View style={styles.card} >
          <Image source={meat} style={styles.image} />
          <Text style={styles.label} >Contém carne</Text>
        </View>
      </View>
      <Text style={styles.obs} >Obs: Este cardápio pode sofrer alterações de última hora</Text>
    </View>
  )
}
