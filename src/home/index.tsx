import { useEffect, useMemo, useState } from 'react'
import { Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { Card } from '../components/card'
import { Select } from '../components/select'
import { Warnings } from '../components/warnings'
import { getCurrentWeekMenu } from '../services/week-menu'
import { AxiosError } from 'axios'
import { Week } from '../interfaces/week'

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
  const [week, setWeek] = useState<Week>()

  const weekPromisse = useMemo(async () => {
    try {
      const response = await getCurrentWeekMenu()

      return response.data
    } catch (error) {
      console.log('Error fetching week menu: ', error as AxiosError)
    }
  }, [])

  useEffect(() => {
    const fechWeek = async () => {
      setWeek(await weekPromisse)
    }

    fechWeek()
  }, [])

  const proteins = week?.menus[day].organizedDishes.find((organizedDishes => organizedDishes.category === 'PROTEIN'))?.dishes
  const sideDishes = week?.menus[day].organizedDishes.find((organizedDishes => organizedDishes.category === 'SIDE_DISH'))?.dishes
  const salads = week?.menus[day].organizedDishes.find((organizedDishes => organizedDishes.category === 'SALAD'))?.dishes
  const desserts = week?.menus[day].organizedDishes.find((organizedDishes => organizedDishes.category === 'DESSERT'))?.dishes
  const drinks = week?.menus[day].organizedDishes.find((organizedDishes => organizedDishes.category === 'DRINK'))?.dishes

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.text}>Cardápio da semana iniciada em {week?.sunday.toString()}</Text>
      <Select items={WEEK_DAYS} value={day} setValue={setDay} />
      <View style={styles.cardsCotainer}>
        {proteins && <Card title="Proteínas" dishes={proteins} />}
        {sideDishes && <Card title="Acompanhamentos" dishes={sideDishes} />}
        {salads && <Card title="Salada" dishes={salads} />}
        {desserts && <Card title="Sobremesa" dishes={desserts} />}
        {drinks && <Card title="Sucos" dishes={drinks} />}
      </View>
      <Warnings />
    </SafeAreaView>
  )
}
