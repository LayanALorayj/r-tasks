import { useToggle } from '../../hooks/useToggle'; 
import Button from './Button';

export const VisibleContent = ({ 
    children, 
    initialText = "Show", 
    hiddenText = "Hide",
    buttonVariant = "secondary" 
}) => {
  const { isVisible, toggle } = useToggle(true); 

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