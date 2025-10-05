import { useState, useEffect } from 'react';

export const useCounter = (initialValue = 0, multiplier = 1) => {
  
  const localStorageKey = 'clickCount';

  const [count, setCount] = useState(() => {
    try {
      const storedValue = localStorage.getItem(localStorageKey);
      return storedValue ? parseInt(storedValue, 10) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(localStorageKey, count.toString());
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }, [count]);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const reset = () => {
    setCount(initialValue);
    try {
      localStorage.removeItem(localStorageKey); 
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };
  
  const decrement = () => {
    setCount(prev => prev - 1);
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