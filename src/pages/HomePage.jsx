import { useCounter } from '../hooks/useCounter';
import { useProducts } from '../hooks/useProducts';
import Counter from '../components/ui/Counter';
import ProductCard from '../components/ui/ProductCard';
import style from '../style.module.css';
import VisibleContent from '../components/ui/ToggleText'; 

const HomePage = () => {
  const { count, multipliedValue, increment, reset } = useCounter(0, 2); 
  const { products, loading, error } = useProducts();
  
  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <>
      <VisibleContent 
          initialText="Show Counter" 
          hiddenText="Hide Counter"
          buttonVariant="warning" 
      >
        <h3>Counter * 2 = {multipliedValue}</h3>
        <Counter count={count} increment={increment} reset={reset} /> 
      </VisibleContent>

      <br />
      <hr />
      <h2 className={style.products}>Products</h2>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;