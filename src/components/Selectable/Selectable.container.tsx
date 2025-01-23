import React from 'react';
import { Pressable } from 'react-native';

import { SelectableView } from './Selectable.view';

interface SelectableProps extends React.ComponentProps<typeof Pressable> {
  selected: boolean;
  title: string;
}

function Selectable({ selected, title, ...props }: SelectableProps) {
  return <SelectableView selected={selected} title={title} {...props} />;
}

export { Selectable };
