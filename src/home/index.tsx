import { useState } from 'react'
import { Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { Card } from '../components/card'
import { Select } from '../components/select'
import { Warnings } from '../components/warnings'

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
      <Select items={WEEK_DAYS} value={day} setValue={setDay} />
      <View style={styles.cardsCotainer}>
        <Card title='Proteínas' />
        <Card title='Acompanhamentos' />
        <Card title='Salada' />
        <Card title='Sobremesa' />
        <Card title='Sucos' />
      </View>
      <Warnings/>
    </SafeAreaView>
  )
}
