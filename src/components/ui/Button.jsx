const Button = ({ 
  children, 
  onClick, 
  variant = 'secondary', 
  className = '', 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const disabledClasses = disabled ? 'disabled' : '';
  
  const buttonClasses = [baseClasses, variantClasses, disabledClasses, className]
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

export default Button;
