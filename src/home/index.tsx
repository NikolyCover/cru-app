import { useState } from 'react'
import { Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { Card } from '../components/card'
import { Select } from '../components/select'
import { Warnings } from '../components/warnings'
import { IDish } from '../interfaces/dish'

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

const DISHES: IDish[] = [
  {
    id: 1,
    name: "Dish 1",
    description: "This is dish 1",
    contains_milk: false,
    contains_meat: true,
    category: "PROTEIN"
  },
  {
    id: 2,
    name: "Dish 2",
    description: "This is dish 2",
    contains_milk: false,
    contains_meat: false,
    category: "SIDE_DISH"
  },
  {
    id: 3,
    name: "Dish 3",
    contains_milk: false,
    contains_meat: false,
    category: "SALAD"
  },
  {
    id: 4,
    name: "Dish 4",
    description: "This is dish 4",
    contains_milk: true,
    contains_meat: true,
    category: "DESSERT"
  },
  {
    id: 5,
    name: "Dish 5",
    description: "This is dish 5",
    contains_milk: true,
    contains_meat: false,
    category: "DRINK"
  }
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
        <Card title='Proteínas' dishes={DISHES} />
        <Card title='Acompanhamentos' dishes={DISHES} />
        <Card title='Salada' dishes={DISHES} />
        <Card title='Sobremesa' dishes={DISHES} />
        <Card title='Sucos' dishes={DISHES} />
      </View>
      <Warnings/>
    </SafeAreaView>
  )
}
