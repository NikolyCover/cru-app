import { useState } from 'react'
import { Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, pickerSelectStyles } from './style'
import RNPickerSelect from 'react-native-picker-select'
import { Entypo } from '@expo/vector-icons'
import { Card } from '../components/card'
import { theme } from '../../theme'

const logo = require('../../assets/logo.png')

const WEEK_DAYS = [
  { value: 0, label: 'Domingo' },
  { value: 1, label: 'Segunda-feira' },
  { value: 2, label: 'Terça-feira' },
  { value: 3, label: 'Quarta-feira' },
  { value: 4, label: 'Quinta-feira' },
  { value: 5, label: 'Sexta-feira' },
  { value: 6, label: 'Sábado' },
]

const SelectIcon = () => (
  <Entypo name='select-arrows' size={16} color={theme.palette.blue.light}/>
)

export const HomeScreen = () => {
  const [day, setDay] = useState(1)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.text}>
        Cardápio da semana iniciada em 19/05/2023
      </Text>
      <RNPickerSelect
        value={day}
        onValueChange={setDay}
        items={WEEK_DAYS}
        style={pickerSelectStyles}
        placeholder={{}}
        Icon={SelectIcon}
      />
      <View style={styles.cardsCotainer}>
        <Card title='Proteína' />
      </View>
    </SafeAreaView>
  )
}
