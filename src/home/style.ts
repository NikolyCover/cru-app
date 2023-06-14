import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: 64,
    height: 40,
  },
  text: {
    fontSize: 16,
    color: theme.palette.neutral.white,
    marginVertical: 24,
    fontWeight: '500'
  },
  cardsCotainer: {
    marginTop: 16,
    gap: 24
  }
})