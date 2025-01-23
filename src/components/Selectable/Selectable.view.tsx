import React from 'react';
import { Pressable, Text } from 'react-native';
import { SelectableStyles as styles } from './Selectable.styles';

interface SelectableViewProps extends React.ComponentProps<typeof Pressable> {
  selected: boolean;
  title: string;
}

function SelectableView({ selected, title, ...props }: SelectableViewProps) {
  const additionalStyles = selected ? styles.selected : {};

  return (
    <Pressable style={[styles.selectable, additionalStyles]} {...props}>
      <Text>{title}</Text>
    </Pressable>
  );
}

export { SelectableView };
