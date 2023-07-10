import { Image, Text, View } from 'react-native'
import { Dish as IDish } from '../../interfaces/dish'
import { styles } from './style'

const milk = require('../../../assets/milk.png')
const meat = require('../../../assets/meat.png')

interface Props {
  dish: IDish
}

export const Dish: React.FC<Props> = ({ dish }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dish.name}</Text>
      <View style={styles.warningsContainer}>
        {dish.containsMilk && <Image source={milk} style={styles.warning} />}
        {dish.containsMeat && <Image source={meat} style={styles.warning} />}
      </View>
    </View>
  )
}
