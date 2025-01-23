import { colors, radius } from '@theme';
import { StyleSheet } from 'react-native';

export const ButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: colors.purple.darken,
        borderRadius: radius.xs,
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        backgroundColor: colors.purple.regular,
    },
    disabled: {
        backgroundColor: colors.purple.regular,
    },
});
