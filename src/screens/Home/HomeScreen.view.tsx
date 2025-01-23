import React from 'react';
import { View, ImageBackground, Image, SafeAreaView } from 'react-native';
import { HomeScreenStyles as styles } from './HomeScreen.styles';
import background from '../../../assets/background.png';
import heroLogo from '../../../assets/heroLogo.png';
import { TextInput } from '@components';

function HomeScreenView() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <SafeAreaView>
          <View style={styles.heroLogoContainer}>
            <Image source={heroLogo} />
          </View>
          <View>
            <TextInput placeholder="Montant (€)" keyboardType="numeric" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

export { HomeScreenView };
