// TODO: Create an API service to fetch data from DummyJSON
// This service will handle all API calls for products

// TODO: Define the base URL for the API
const API_BASE_URL = 'https://dummyjson.com';

// TODO: Create a service object with methods for API calls
export const productService = {
  // TODO: Create a method to get all products
  // This method should:
  // 1. Make a fetch request to the API
  // 2. Handle the response
  // 3. Return the products data
  // 4. Handle errors properly
  async getAllProducts() {
    try {
      // TODO: Make a fetch request to get products
      // Hint: Use fetch() with the API URL
      const response = await fetch(`${API_BASE_URL}/products`);
      
      // TODO: Check if the response is ok
      // If not ok, throw an error
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // TODO: Parse the JSON response
      const data = await response.json();
      
      // TODO: Return the products array from the response
      return data.products;
    } catch (error) {
      // TODO: Log the error and re-throw it
      // This allows the component to handle the error
      console.error('Error fetching products:', error);
      throw error;
    }
  }
};
