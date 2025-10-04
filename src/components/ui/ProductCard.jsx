import { Card, CardBody } from './Card';

const ProductCard = ({ product, className = '' }) => {
  return (
    <Card className={`mb-3 ${className}`}>
       <img className="card-img"
        src={product.images}
        alt={product.title}
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <CardBody>
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div className="card-price-container">
          <strong> ${product.price}</strong>
          <i className="bi bi-cart3"></i>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
