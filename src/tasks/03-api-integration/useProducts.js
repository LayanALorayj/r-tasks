// TODO: Create a custom hook to manage product data from the API
// This hook will handle loading, error, and data states

import { useState, useEffect } from 'react';
import { productService } from './apiService';

// TODO: Create the useProducts custom hook
// This hook should:
// 1. Manage products data state
// 2. Manage loading state
// 3. Manage error state
// 4. Fetch products when the component mounts
export const useProducts = () => {
  // TODO: Create state for products (start with empty array)
  const [products, setProducts] = useState([]);
  
  // TODO: Create state for loading (start with true)
  const [loading, setLoading] = useState(true);
  
  // TODO: Create state for error (start with null)
  const [error, setError] = useState(null);

  // TODO: Use useEffect to fetch products when component mounts
  // This should:
  // 1. Set loading to true
  // 2. Clear any previous errors
  // 3. Call the API service
  // 4. Handle success and error cases
  // 5. Set loading to false when done
  useEffect(() => {
    // TODO: Create an async function to fetch products
    const fetchProducts = async () => {
      try {
        // TODO: Set loading to true and clear errors
        setLoading(true);
        setError(null);
        
        // TODO: Call the API service to get products
        const data = await productService.getAllProducts();
        
        // TODO: Set the products data
        setProducts(data);
      } catch (err) {
        // TODO: Set the error message
        setError(err.message);
      } finally {
        // TODO: Set loading to false (this runs whether success or error)
        setLoading(false);
      }
    };

    // TODO: Call the fetch function
    fetchProducts();
  }, []); // Empty dependency array means this runs once when component mounts

  // TODO: Return an object with products, loading, and error
  return { products, loading, error };
};
