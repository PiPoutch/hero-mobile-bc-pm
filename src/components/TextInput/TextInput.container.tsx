import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { TextInputView } from './TextInput.view';

type TextInputProps = React.ComponentProps<typeof RNTextInput>;

function TextInput({ placeholder, ...props }: TextInputProps) {
  return <TextInputView placeholder={placeholder} {...props} />;
}

export { TextInput };
