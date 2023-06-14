import { useState } from 'react'
import { Image, View, Text } from 'react-native'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'

const logo = require('../../assets/logo.png')

export const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.text}>
        Cardápio a partir do dia 19/05/2023 (segunda-feira)
      </Text>
    </SafeAreaView>
  )
}
