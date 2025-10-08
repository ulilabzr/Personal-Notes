import { useState, useCallback } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);
  const onValueChangeHandler = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  return [value, onValueChangeHandler, setValue];
}

export default useInput;


