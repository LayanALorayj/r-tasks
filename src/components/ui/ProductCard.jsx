import { Card, CardBody } from './Card';

const ProductCard = ({ product, className = '' }) => {
  return (
    <Card className={`mb-3 ${className}`}>
      <CardBody>
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <strong>Price: ${product.price}</strong>
        </p>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
