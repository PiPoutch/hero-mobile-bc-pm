import { colors, radius, textColors } from '@theme';
import { StyleSheet } from 'react-native';

export const ButtonStyles = StyleSheet.create({
    gradient: {
        borderRadius: radius.xs,
        height: 50,
    },
    button: {
        borderRadius: radius.xs,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        backgroundColor: colors.purple.regular,
    },
    disabled: {
        opacity: 1,
    },
    buttonText: {
        color: textColors.default,
    },
    disabledText: {
        color: textColors.disabled,
    },
});

export const gradientColors = [colors.purple.darken, colors.purple.regular] as const;
