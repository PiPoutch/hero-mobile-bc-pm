import { spacing } from '@theme';
import { StyleSheet } from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  buttonContainer: {
    height: 50,
    marginVertical: spacing.m,
  },
  formContainer: {
    rowGap: spacing.l,
    flex: 1,
  },
  heroLogoContainer: {
    width: '100%',
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
