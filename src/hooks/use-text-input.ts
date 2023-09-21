import {useState} from 'react';

interface FormValue {
  value: string;
  onChangeText: (value: string) => void;
}

export function useTextInput(
  defaultValue?: string,
  validation?: (value: string) => boolean,
  change?: (value: string) => void,
): [FormValue, boolean] {
  const [value, setValue] = useState(defaultValue);
  const [valid, setValid] = useState(false);

  function handleChange(text) {
    setValue(text);

    if (change) {
      change(text);
    }

    const isValid = Boolean(text) && (!validation || validation(text));
    setValid(isValid);
  }

  return [{value, onChangeText: handleChange}, valid];
}
