import { spacing } from '@theme';
import { StyleSheet } from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    rowGap: spacing.m,
  },
  heroLogoContainer: {
    width: 336,
    height: 129,
  },
  selectableContainer: {
    columnGap: spacing.s,
    flexDirection: 'row',
  },
});
