import { Text, View } from 'react-native'
import { IDish } from '../../interfaces/dish'
import { styles } from './style'

interface Props {
    //dish: IDish
    dish: string
}

export const Dish: React.FC<Props> = ({ dish }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ dish }</Text>
    </View>
  )
}
