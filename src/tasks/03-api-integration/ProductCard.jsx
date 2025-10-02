// TODO: Create a ProductCard component to display product information
// This component should show product details in a nice card format

import React from 'react';
import { Card, CardBody } from '../01-basic-components/Card';

// TODO: Create the ProductCard component
// It should accept a product prop with product data
const ProductCard = ({ product }) => {
  // TODO: Destructure the product data you need
  // Hint: You'll need title, description, price, and image
  const { title, description, price, thumbnail } = product;

  return (
    // TODO: Use the Card component to wrap the product information
    <Card className="h-100">
      {/* TODO: Add product image if thumbnail exists */}
      {thumbnail && (
        <img 
          src={thumbnail} 
          alt={title}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      
      <CardBody className="d-flex flex-column">
        {/* TODO: Display the product title */}
        <h5 className="card-title">{title}</h5>
        
        {/* TODO: Display the product description */}
        <p className="card-text flex-grow-1">{description}</p>
        
        {/* TODO: Display the product price with proper formatting */}
        <p className="card-text">
          <strong className="text-success">${price}</strong>
        </p>
      </CardBody>
    </Card>
  );
};

// TODO: Export the ProductCard component
export default ProductCard;
