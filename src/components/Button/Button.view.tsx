import React from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonStyles as styles } from './Button.styles';

interface ButtonViewProps extends React.ComponentProps<typeof Pressable> {
  disabled?: boolean;
  title: string;
}

function ButtonView({ disabled, title, ...props }: ButtonViewProps) {
  function getStyle(pressed: boolean) {
    if (disabled) {
      return [styles.button, styles.disabled];
    } else {
      return [styles.button, pressed ? styles.pressed : {}];
    }
  }

  return (
    <Pressable style={({ pressed }) => [getStyle(pressed)]} {...props}>
      <Text>{title}</Text>
    </Pressable>
  );
}

export { ButtonView };
