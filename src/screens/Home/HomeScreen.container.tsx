import React from 'react';
import { useHomeScreen } from './HomeScreen.hook';
import { HomeScreenView } from './HomeScreen.view';

function HomeScreenContainer() {
  const { handleSelectablePress, selected } = useHomeScreen();
  return (
    <HomeScreenView
      handleSelectablePress={handleSelectablePress}
      selected={selected}
    />
  );
}

export { HomeScreenContainer as HomeScreen };
