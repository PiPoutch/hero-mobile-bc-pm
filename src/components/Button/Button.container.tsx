import React from 'react';
import { Pressable } from 'react-native';

import { ButtonView } from './Button.view';

interface ButtonProps extends React.ComponentProps<typeof Pressable> {
  disabled?: boolean;
  isLoading?: boolean;
  title: string;
}

function Button({ disabled, isLoading, title, ...props }: ButtonProps) {
  return (
    <ButtonView
      disabled={disabled}
      isLoading={isLoading}
      title={title}
      {...props}
    />
  );
}

export { Button };
