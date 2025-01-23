import React from 'react';
import { TextInput } from 'react-native';
import { TextInputStyles as styles } from './TextInput.styles';

type TextInputViewProps = React.ComponentProps<typeof TextInput>;

function TextInputView({ placeholder, ...props }: TextInputViewProps) {
  return (
    <TextInput placeholder={placeholder} style={styles.textInput} {...props} />
  );
}

export { TextInputView };
