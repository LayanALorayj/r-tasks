// TODO: Create a ToggleText component that shows/hides content
// This component should use state to control visibility

import React, { useState } from 'react';
import Button from '../01-basic-components/Button';

// TODO: Create the ToggleText component
const ToggleText = () => {
  // TODO: Use useState to create a state variable called 'isVisible'
  // Initialize it to true (content should be visible by default)
  const [isVisible, setIsVisible] = useState(true);

  // TODO: Create a function to toggle the visibility
  // Hint: Use setIsVisible with the opposite of current value
  const toggleVisibility = () => {
    setIsVisible(prevVisible => !prevVisible);
  };

  return (
    <div className="text-center p-4">
      {/* TODO: Conditionally render the text based on isVisible state */}
      {/* Hint: Use && operator to show text only when isVisible is true */}
      {isVisible && (
        <div className="mb-3">
          <h3>Hello World!</h3>
          <p>This text can be toggled on and off.</p>
        </div>
      )}
      
      {/* TODO: Create a button that toggles the visibility */}
      {/* The button text should change based on the current state */}
      <Button 
        variant="secondary" 
        onClick={toggleVisibility}
      >
        {isVisible ? 'Hide Text' : 'Show Text'}
      </Button>
    </div>
  );
};

// TODO: Export the ToggleText component
export default ToggleText;
