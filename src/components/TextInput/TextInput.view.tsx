import React from 'react';
import { TextInput } from 'react-native';
import { TextInputStyles as styles } from './TextInput.styles';

type TextInputViewProps = React.ComponentProps<typeof TextInput>;

function TextInputView({ ...props }: TextInputViewProps) {
  return <TextInput style={styles.textInput} {...props} />;
}

export { TextInputView };
