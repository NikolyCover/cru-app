import { StyleSheet } from 'react-native'
import { theme } from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
    color: theme.palette.neutral.white,
    marginVertical: 24,
    fontWeight: '400'
  },
  cardsCotainer: {
    marginTop: 16,
    gap: 24
  },
  selectsContainer: {
    //marginTop: 24,
    marginBottom: 16,
    gap: 16
  },
  image: {
    width: 64,
    height: 40,
  }
})