import { useState } from "react";

export function useHomeScreen() {
const [selected, setSelected] = useState<[boolean, boolean, boolean]>([false, false, false]);

function handleSelectablePress(index: number) {
    const newSelected: [boolean, boolean, boolean] = [false, false, false];
    newSelected[index] = true;
    setSelected(newSelected);
}

  return {
    handleSelectablePress,
    selected,
  };
}
