import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.blue.dark,
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
  },
  cardsCotainer: {
    marginTop: 16
  }
})

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: theme.palette.neutral.white,
    backgroundColor: theme.palette.blue.main,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: theme.palette.neutral.white,
    backgroundColor: theme.palette.blue.main,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 8,
    right: 8,
  },
})
