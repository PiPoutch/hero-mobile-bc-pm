import { colors, radius } from '@theme';
import { StyleSheet } from 'react-native';

export const SelectableStyles = StyleSheet.create({
    selectable: {
        backgroundColor: 'white',
        borderRadius: radius.xs,
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: colors.purple.light,
    },
});
