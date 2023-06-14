import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C5C75',
    padding: 16,
  },
  image: {
    width: 64,
    height: 40,
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    marginVertical: 24,
  },
})

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: '#FFF',
    backgroundColor: '#289FC3',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: '#FFF',
    backgroundColor: '#289FC3',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 8,
    right: 8,
  },
})
