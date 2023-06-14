import { StyleSheet } from 'react-native'
import { theme } from '../../../theme'

export const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.palette.blue.main,
        borderRadius: 8,
        padding: 8
    },
    title: {
        color: theme.palette.neutral.white,
        fontSize: 16
    }
})