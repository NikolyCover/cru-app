import { Text, View } from 'react-native'
import { Dish } from '../dish'
import { styles } from './style'

interface Props {
    title: string
}

export const Card: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Dish />
      <Dish />
      <Dish />
    </View>
  )
}
