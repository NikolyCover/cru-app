import { StyleSheet } from 'react-native'
import { theme } from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.palette.blue.dark,
  },
  msgContainer: {
    gap: 24,
    alignItems: 'center',
  },
  text: {
    color: theme.palette.neutral.white,
    fontWeight: '500',
    fontSize: 16
  },
  image: {
    width: 300,
    height: 226
  }
})