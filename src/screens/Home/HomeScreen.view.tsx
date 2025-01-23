import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import { HomeScreenStyles as styles } from './HomeScreen.styles';
import background from '../../../assets/background.png';
import heroLogo from '../../../assets/heroLogo.png';
import { Button, Selectable, TextInput } from '@components';

interface HomeScreenViewProps {
  handleAmountChange: (text: string) => void;
  handlePhoneChange: (text: string) => void;
  handleSelectablePress: (index: number) => void;
  handleSubmit: () => void;
  amount: string;
  phone: string;
  isButtonDisabled: boolean;
  isLoading: boolean;
  selected: boolean[];
}

function HomeScreenView({
  handleAmountChange,
  handlePhoneChange,
  handleSelectablePress,
  handleSubmit,
  amount,
  phone,
  isButtonDisabled,
  isLoading,
  selected,
}: HomeScreenViewProps) {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.formContainer}>
              <View style={styles.heroLogoContainer}>
                <Image source={heroLogo} style={styles.heroLogo} />
              </View>
              <TextInput
                placeholder="Montant (€)"
                keyboardType="numeric"
                onChangeText={handleAmountChange}
                value={amount}
              />
              <TextInput
                placeholder="Numéro de téléphone"
                keyboardType="numeric"
                onChangeText={handlePhoneChange}
                value={phone}
              />
              <View style={styles.selectableContainer}>
                <Selectable
                  title={'P1X'}
                  onPress={() => handleSelectablePress(0)}
                  selected={selected[0]}
                />
                <Selectable
                  title={'P3X'}
                  onPress={() => handleSelectablePress(1)}
                  selected={selected[1]}
                />
                <Selectable
                  title={'P4X'}
                  onPress={() => handleSelectablePress(2)}
                  selected={selected[2]}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Envoyer le lien de paiement"
                disabled={isButtonDisabled}
                isLoading={isLoading}
                onPress={handleSubmit}
              />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

export { HomeScreenView };
