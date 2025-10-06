import { useState } from 'react';
import Button from './Button';


const VisibleContent = ({ 
    children, 
    initialText = "Show", 
    hiddenText = "Hide",
    buttonVariant = "secondary" 
}) => {
   const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(prev => !prev);
  };

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };


  return (
    <div style={{ marginBottom: '10px' }}>
      
      {isVisible && children} 
      
      <Button 
        variant={buttonVariant} 
        onClick={toggle}
        style={{ marginTop: '10px' }}
      >
        {isVisible ? hiddenText : initialText}
      </Button>
    </div>
  );
};
export default VisibleContent;