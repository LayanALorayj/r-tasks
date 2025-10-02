import { useState } from 'react';

export const useCounter = (initialValue = 0, multiplier = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const multipliedValue = count * multiplier;

  return {
    count,
    multipliedValue,
    increment,
    decrement,
    reset
  };
};
