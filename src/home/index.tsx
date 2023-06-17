import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { Card } from '../components/card'
import { Select } from '../components/select'
import { Warnings } from '../components/warnings'
import { Week } from '../interfaces/week'
import { WEEK_DAYS } from '../constants/week-days'
import { getDishesByCategory } from '../utils/get-dishes-by-category'
import { Error } from '../components/error'
import { formatDate } from '../utils/format-date'
import { weekPromisse, weeksPromisse } from '../contexts/week'
import { Item } from 'react-native-picker-select'

const logo = require('../../assets/logo.png')

export const HomeScreen = () => {
  const [week, setWeek] = useState<Week>()
  const [weeks, setWeeks] = useState<Week[]>()
  const [day, setDay] = useState<number>(-1)
  const [availableWeekDays, setAvailableWeekDays] = useState<Item[]>()

  useEffect(() => {
    ;(async () => {
      setWeek(await weekPromisse())

      const newWeeks = await weeksPromisse()
      
      //get only the weeks that have at least one menu not null
      const availableWeeks = newWeeks?.filter((week) => week.menus?.find((menu) => menu))
      
      setWeeks(availableWeeks)
    })()
  }, [])

  useEffect(() => {
    setAvailableWeekDays(
      WEEK_DAYS.filter((weekDay) => week?.menus[weekDay.value]),
    )
  }, [week])

  useEffect(() => {
    setDay(
      availableWeekDays && availableWeekDays.length > 0
        ? availableWeekDays[0].value
        : -1,
    )
  }, [availableWeekDays])

  if (!week || !weeks || day == -1) {
    return <Error />
  }

  const changeWeek: Dispatch<SetStateAction<number>> = async (
    value: SetStateAction<number>,
  ) => {
    if (typeof value === 'function') {
      const newWeekId = value(week.id)
      setWeek(await weekPromisse(newWeekId))
    } else {
      setWeek(await weekPromisse(value))
    }
  }

  const sundays: Item[] = weeks?.map((week) => ({
    value: week.id,
    label: formatDate(week.sunday),
  }))

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
      <View style={styles.selectsContainer}>
        {availableWeekDays && day != -1 && (
          <Select items={availableWeekDays} value={day} setValue={setDay} />
        )}
        <Select items={sundays} value={week.id} setValue={changeWeek} />
      </View>
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
