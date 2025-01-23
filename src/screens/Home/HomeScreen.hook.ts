import { useState } from "react";
import { Alert } from "react-native";

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

function showAlert() {
    Alert.alert('Lien de paiement envoyé', `Votre lien de paiement d'un montant de ${amount} € a bien été envoyé au ${phone}.`, [

        {text: 'OK'},
    ]);
}

function handleSubmit() {
    if (isButtonDisabled) {
        return;
    }
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        clearForm();
        showAlert();
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
