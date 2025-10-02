import { useToggle } from '../../hooks/useToggle';
import Button from './Button';

const ToggleText = () => {
  const { isVisible, toggle } = useToggle(true);

  return (
    <div>
      {isVisible && <p className="text">hi</p>}
      <Button 
        variant="secondary" 
        onClick={toggle}
      >
        {isVisible ? "hide" : "show"}
      </Button>
    </div>
  );
};

export default ToggleText;
