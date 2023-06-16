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
import { WEEK_DAYS } from '../constants/week-days'
import { getDishesByCategory } from '../utils/get-dishes-by-category'
import { Error } from '../components/error'
import { formatDate } from '../utils/format-date'

const logo = require('../../assets/logo.png')

export const HomeScreen = () => {
  const [day, setDay] = useState(1)
  const [week, setWeek] = useState<Week>()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getCurrentWeekMenu()
        setWeek(response.data)
      } catch (error) {
        console.log('Error fetching week menu: ', error as AxiosError)
      }
    })()
  }, [])

  if (!week) {
    return <Error />
  }

  const availableWeekDays = WEEK_DAYS.filter(
    (weekDay) => week?.menus[weekDay.value],
  )

  const proteins = getDishesByCategory(week, day, 'PROTEIN')
  const sideDishes = getDishesByCategory(week, day, 'SIDE_DISH')
  const salads = getDishesByCategory(week, day, 'SALAD')
  const desserts = getDishesByCategory(week, day, 'DESSERT')
  const drinks = getDishesByCategory(week, day, 'DRINK')

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.text}>
        Cardápio da semana iniciada em: {formatDate(week.sunday)}
      </Text>
      <Select items={availableWeekDays} value={day} setValue={setDay} />
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
