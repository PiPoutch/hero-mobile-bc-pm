import React from 'react';
import { View, ImageBackground, Image, SafeAreaView } from 'react-native';
import { HomeScreenStyles as styles } from './HomeScreen.styles';
import background from '../../../assets/background.png';
import heroLogo from '../../../assets/heroLogo.png';
import { Selectable, TextInput } from '@components';

interface HomeScreenViewProps {
  handleSelectablePress: (index: number) => void;
  selected: boolean[];
}

function HomeScreenView({
  handleSelectablePress,
  selected,
}: HomeScreenViewProps) {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <SafeAreaView>
          <View style={styles.heroLogoContainer}>
            <Image source={heroLogo} />
          </View>
          <View style={styles.formContainer}>
            <TextInput placeholder="Montant (€)" keyboardType="numeric" />
            <TextInput
              placeholder="Numéro de téléphone"
              keyboardType="numeric"
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
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

export { HomeScreenView };
