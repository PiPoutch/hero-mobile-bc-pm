import { useState } from "react";

export function useHomeScreen() {
const [selected, setSelected] = useState<[boolean, boolean, boolean]>([true, false, false]);


function handleSelectablePress(index: number) {
    const newSelected: [boolean, boolean, boolean] = [false, false, false];
    newSelected[index] = true;
    setSelected(newSelected);
}

    const isButtonDisabled = false;
    return {
        handleSelectablePress,
        isButtonDisabled,
        selected,
    };
}
