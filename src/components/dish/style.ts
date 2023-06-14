import { StyleSheet } from 'react-native'
import { theme } from '../../../theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.palette.neutral.white,
        borderRadius: 4,
        height: 40,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        marginLeft: 8
    },
    warningsContainer: {
        flexDirection: 'row',
        gap: 4
    },
    warning: {
        width: 32,
        height: 32,
    }
})