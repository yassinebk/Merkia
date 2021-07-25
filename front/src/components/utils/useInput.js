import { useState } from 'react';

export const useInput = (type) => {

  const [value, setValue] = useState('');
  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const reset = () => {
    setValue('');
  };
  return {
    type,
    onChange,
    reset,
    value,
    setValue
  };
};
