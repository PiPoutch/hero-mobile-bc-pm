import React from 'react';
import { useHomeScreen } from './HomeScreen.hook';
import { HomeScreenView } from './HomeScreen.view';

function HomeScreenContainer() {
  const { handleSelectablePress, isButtonDisabled, selected } = useHomeScreen();
  return (
    <HomeScreenView
      handleSelectablePress={handleSelectablePress}
      isButtonDisabled={isButtonDisabled}
      selected={selected}
    />
  );
}

export { HomeScreenContainer as HomeScreen };
