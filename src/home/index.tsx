import { useMemo, useState } from 'react'
import { Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { Card } from '../components/card'
import { Select } from '../components/select'
import { Warnings } from '../components/warnings'
import { getDishesByCategory } from '../utils/get-dishes-by-category'
import { formatDate } from '../utils/format-date'
import { availableWeekDaysSelector, dayAtom, weekAtom, weeksAtom } from '../contexts/week'
import { Item } from 'react-native-picker-select'
import { useRecoilState, useRecoilValue } from 'recoil'

const logo = require('../../assets/logo.png')

export const HomeScreen = () => {
  const weeks = useRecoilValue(weeksAtom)
  const [weekId, setWeekId] = useState(-1)
  const week = useRecoilValue(weekAtom(weekId))
  const availableWeekDays = useRecoilValue(availableWeekDaysSelector(weekId))
  const [day, setDay] = useRecoilState(dayAtom(weekId))

  if (!week || !weeks) {
    return null
  }

  const sundays: Item[] = useMemo(() => weeks?.map((week) => ({
    value: week.id,
    label: formatDate(week.sunday),
  })), [weeks])

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
        Confira abaixo o cardápio semanal do restaurante universitário!
      </Text>
      <View style={styles.selectsContainer}>
        <Select items={sundays} value={week.id} setValue={setWeekId} label='Semana iniciada em:' />
        {availableWeekDays && (
          <Select items={availableWeekDays} value={day} setValue={setDay} label='Dia da semana:' />
        )}
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
