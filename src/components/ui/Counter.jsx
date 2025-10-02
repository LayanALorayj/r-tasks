import Button from './Button';

const Counter = ({ count, increment }) => {
  return (
    <div className="center">
      <h3 className="click">number of click: {count}</h3>
      <Button 
        variant="secondary" 
        onClick={increment}
        type="reset"
      >
        click
      </Button>
    </div>
  );
};

export default Counter;
