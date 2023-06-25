import { Dispatch, ReactNode, SetStateAction } from 'react'
import RNPickerSelect, { Item } from 'react-native-picker-select'
import { Entypo } from '@expo/vector-icons'
import { theme } from '../../../theme'
import { styles } from './style'
import { Text, View } from 'react-native'

const SelectIcon = () => (
  <Entypo name="select-arrows" size={16} color={theme.palette.blue.light} />
)

interface Props {
  items: Item[]
  value: number
  setValue: Dispatch<SetStateAction<number>>
  label: string
}

export const Select: React.FC<Props> = ({ items, value, setValue, label }) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <RNPickerSelect
        value={value}
        onValueChange={setValue}
        items={items}
        style={styles}
        placeholder={{}}
        Icon={SelectIcon as unknown as ReactNode} //react-native-picker-select typescript error
        useNativeAndroidPickerStyle={false}
      />
    </View>
  )
}
