import { useMemo, useState } from 'react'
import { Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { Card } from '../../components/card'
import { Select } from '../../components/select'
import { Warnings } from '../../components/warnings'
import { getDishesByCategory } from '../../utils/get-dishes-by-category'
import { formatDate } from '../../utils/format-date'
import { Item } from 'react-native-picker-select'
import { useRecoilValue } from 'recoil'
import { NoMenu } from '../no-menu'
import { menuAtom, menusAtom } from '../../contexts/menu'


const logo = require('../../../assets/logo.png')

export const HomeScreen = () => {
  const [menuId, setMenuId] = useState(-1)
  const menu = useRecoilValue(menuAtom(menuId))
  const menus = useRecoilValue(menusAtom)

  const menuOptions: Item[] = menus.map((menu) => ({
    label: formatDate(menu.date),
    value: menu.id
  }))

  if (!menu) {
    return <NoMenu/>
  }

  const proteins = getDishesByCategory(menu, 'PROTEIN')
  const sideDishes = getDishesByCategory(menu, 'SIDE_DISH')
  const salads = getDishesByCategory(menu, 'SALAD')
  const desserts = getDishesByCategory(menu, 'DESSERT')
  const drinks = getDishesByCategory(menu, 'DRINK')

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.text}>
        Confira abaixo o cardápio diário do restaurante universitário!
      </Text>
      <View style={styles.selectsContainer}>
        <Select items={menuOptions} value={menu.id} setValue={setMenuId} label='Dia:' />
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
