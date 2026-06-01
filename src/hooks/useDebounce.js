import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(setTimeoutId);
        };
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;
