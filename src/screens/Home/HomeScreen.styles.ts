import { spacing } from '@theme';
import { StyleSheet } from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    height: 50,
    marginVertical: spacing.m,
  },
  formContainer: {
    rowGap: spacing.l,
  },
  heroLogoContainer: {
    width: 336,
    height: 129,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroLogo: {
    width: 168,
    height: 64.5,
  },
  selectableContainer: {
    columnGap: spacing.s,
    flexDirection: 'row',
  },
});
