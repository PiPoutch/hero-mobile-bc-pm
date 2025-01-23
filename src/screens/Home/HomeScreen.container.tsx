import React from 'react';
import { useHomeScreen } from './HomeScreen.hook';
import { HomeScreenView } from './HomeScreen.view';

function HomeScreenContainer() {
  const {
    handleAmountChange,
    handlePhoneChange,
    handleSelectablePress,
    handleSubmit,
    amount,
    phone,
    isButtonDisabled,
    isLoading,
    selected,
  } = useHomeScreen();
  return (
    <HomeScreenView
      handleAmountChange={handleAmountChange}
      handlePhoneChange={handlePhoneChange}
      handleSelectablePress={handleSelectablePress}
      handleSubmit={handleSubmit}
      amount={amount}
      phone={phone}
      isButtonDisabled={isButtonDisabled}
      isLoading={isLoading}
      selected={selected}
    />
  );
}

export { HomeScreenContainer as HomeScreen };
