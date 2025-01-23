import React from 'react';
import { Pressable } from 'react-native';

import { ButtonView } from './Button.view';

interface ButtonProps extends React.ComponentProps<typeof Pressable> {
  disabled?: boolean;
  title: string;
}

function Button({ disabled, title, ...props }: ButtonProps) {
  return <ButtonView disabled={disabled} title={title} {...props} />;
}

export { Button };
