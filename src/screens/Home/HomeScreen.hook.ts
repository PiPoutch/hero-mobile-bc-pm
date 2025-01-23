import { useState } from "react";

export function useHomeScreen() {
const [selected, setSelected] = useState<[boolean, boolean, boolean]>([true, false, false]);
const [phone, setPhone] = useState<string>('');
const [amount, setAmount] = useState<string>('');
const [isLoading, setIsLoading] = useState<boolean>(false);


function handleSelectablePress(index: number) {
    const newSelected: [boolean, boolean, boolean] = [false, false, false];
    newSelected[index] = true;
    setSelected(newSelected);
}

const isButtonDisabled = phone.length === 0 || amount.length === 0;

function clearForm() {

    setPhone('');
    setAmount('');
    setSelected([true, false, false]);
}

function handleSubmit() {
    if (isButtonDisabled) {
        return;
    }
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        clearForm();
    }, 2000);
}

function handleAmountChange(value: string) {
    setAmount(value);
}

function handlePhoneChange(value: string) {
    setPhone(value);
}


    return {
        handleAmountChange,
        handlePhoneChange,
        handleSelectablePress,
        handleSubmit,
        amount,
        phone,
        isButtonDisabled,
        isLoading,
        selected,
    };
}
