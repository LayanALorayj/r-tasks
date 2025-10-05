import Button from './Button';

const Counter = ({ count, increment, reset }) => { 
  return (
    <div className="center">
      <h3 className="click">number of click: {count}</h3>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <Button 
          variant="secondary" 
          onClick={increment}
        >
          click
        </Button>
        <Button 
          variant="danger" 
          onClick={reset} 
        >
          Reset & Clear Storage
        </Button>
      </div>
    </div>
  );
};

export default Counter;