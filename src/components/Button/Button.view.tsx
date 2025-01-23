import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { ButtonStyles as styles, gradientColors } from './Button.styles';

interface ButtonViewProps extends React.ComponentProps<typeof Pressable> {
  disabled?: boolean;
  isLoading?: boolean;
  title: string;
}

function ButtonView({ disabled, isLoading, title, ...props }: ButtonViewProps) {
  function getStyle(pressed: boolean) {
    if (disabled) {
      return [styles.button, styles.disabled];
    } else {
      return [styles.button, pressed ? styles.pressed : {}];
    }
  }
  function getTextStyle() {
    if (disabled) {
      return styles.disabledText;
    } else {
      return styles.buttonText;
    }
  }

  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.gradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <Pressable style={({ pressed }) => [getStyle(pressed)]} {...props}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={getTextStyle()}>{title}</Text>
        )}
      </Pressable>
    </LinearGradient>
  );
}

export { ButtonView };
