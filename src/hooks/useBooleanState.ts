import { useState, useCallback } from 'react';

export default function useBooleanState(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);
  const setValueTrue = useCallback(() => {
    setValue(true);
  }, [setValue]);

  const setValueFalse = useCallback(() => {
    setValue(false);
  }, [setValue]);

  const toggleValue = useCallback(() => {
    setValue((value) => !value);
  }, [setValue]);

  return [value, setValueTrue, setValueFalse, toggleValue] as const;
}
