import React from 'react';
import { View, ImageBackground } from 'react-native';
import { HomeScreenStyles as styles } from './HomeScreen.styles';
import background from '../../../assets/background.png';


function HomeScreenView () {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
      ></ImageBackground>
    </View>
  );
};



export { HomeScreenView }