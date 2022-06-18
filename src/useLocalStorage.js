import { useState, useEffect } from "react";

const useLocalStorage = (keyName, initialValue) => {
    const getFromLocalStorage = () => {
        const localData = localStorage.getItem(keyName);

        return localData ? JSON.parse(localData) : initialValue;
    };

    const [state, setState] = useState(getFromLocalStorage);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [state]);
    return [state, setState];

};

export { useLocalStorage };