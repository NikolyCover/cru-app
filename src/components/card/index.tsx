import { Text, View } from 'react-native'
import { Dish } from '../dish'
import { styles } from './style'
import { IDish } from '../../interfaces/dish'

interface Props {
  title: string,
  dishes: IDish[]
}

export const Card: React.FC<Props> = ({ title, dishes }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dishContainer}>
        {dishes.map((dish) => (
            <Dish key={dish.id} dish={dish} />
        ))}
      </View>
    </View>
  )
}
