// TODO: Create a ProductsPage component that displays products from the API
// This component should handle loading, error, and success states

import React from 'react';
import { useProducts } from './useProducts';
import ProductCard from './ProductCard';

// TODO: Create the ProductsPage component
const ProductsPage = () => {
  // TODO: Use the useProducts hook to get products, loading, and error states
  const { products, loading, error } = useProducts();

  // TODO: Handle loading state
  // Show a loading message while data is being fetched
  if (loading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading products...</p>
      </div>
    );
  }

  // TODO: Handle error state
  // Show an error message if something went wrong
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Oops! Something went wrong</h4>
        <p>Error loading products: {error}</p>
        <hr />
        <p className="mb-0">Please try refreshing the page.</p>
      </div>
    );
  }

  // TODO: Handle success state
  // Display the products in a grid layout
  return (
    <div className="container">
      <h2 className="text-center mb-4">Our Products</h2>
      
      {/* TODO: Display products in a responsive grid */}
      {/* Hint: Use Bootstrap's row and col classes */}
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            {/* TODO: Use the ProductCard component to display each product */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

// TODO: Export the ProductsPage component
export default ProductsPage;
