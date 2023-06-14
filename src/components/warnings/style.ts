import { StyleSheet } from 'react-native'
import { theme } from '../../../theme'

export const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
    cardsContainer: {
        flexDirection: 'row',
        gap: 32,
    },
    title: {
        color: theme.palette.neutral.white,
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 24
    },
    card: {
        gap: 8,
        alignItems: 'center'
    },
    image: {
        width: 56,
        height: 56
    },
    label: {
        color: theme.palette.neutral.white,
        fontSize: 14,
        fontWeight: '600'
    },
    obs: {
        color: theme.palette.neutral.white,
        marginTop: 40
    }
})