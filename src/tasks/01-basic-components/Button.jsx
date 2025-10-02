// TODO: Create a reusable Button component
// This component should accept different styles and handle clicks

import React from 'react';

// TODO: Define the Button component
// It should accept these props:
// - children: the text inside the button
// - onClick: function to run when clicked
// - variant: 'primary' or 'secondary' (default: 'secondary')
// - disabled: boolean to disable the button
const Button = ({ 
  children, 
  onClick, 
  variant = 'secondary', 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  // TODO: Create CSS classes based on the variant
  // Hint: Use template literals to combine classes
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const disabledClasses = disabled ? 'disabled' : '';
  
  // TODO: Combine all classes into one string
  const buttonClasses = [baseClasses, variantClasses, disabledClasses]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// TODO: Export the Button component so other files can use it
export default Button;
