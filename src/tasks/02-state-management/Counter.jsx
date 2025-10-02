// TODO: Create a Counter component that manages its own state
// This component should track a number and allow increment/decrement

import React, { useState } from 'react';
import Button from '../01-basic-components/Button';

// TODO: Create the Counter component
const Counter = () => {
  // TODO: Use useState to create a state variable called 'count'
  // Initialize it to 0
  const [count, setCount] = useState(0);

  // TODO: Create a function to increment the count
  // Hint: Use setCount with the previous value + 1
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // TODO: Create a function to decrement the count
  // Hint: Use setCount with the previous value - 1
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // TODO: Create a function to reset the count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="text-center p-4">
      {/* TODO: Display the current count */}
      <h2 className="mb-3">Count: {count}</h2>
      
      {/* TODO: Create buttons for increment, decrement, and reset */}
      <div className="d-flex gap-2 justify-content-center">
        <Button 
          variant="primary" 
          onClick={increment}
        >
          +1
        </Button>
        
        <Button 
          variant="secondary" 
          onClick={decrement}
        >
          -1
        </Button>
        
        <Button 
          variant="danger" 
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

// TODO: Export the Counter component
export default Counter;
