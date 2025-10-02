// TODO: Create the main App component that brings everything together
// This component should set up routing and include all the learning tasks

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: Import all the page components
import HomePage from './04-routing/HomePage';
import AboutPage from './04-routing/AboutPage';
import ProductsPage from './03-api-integration/ProductsPage';

// TODO: Import the Layout component
import Layout from './04-routing/Layout';

// TODO: Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// TODO: Create the main App component
const App = () => {
  return (
    // TODO: Wrap everything in BrowserRouter to enable routing
    <BrowserRouter>
      {/* TODO: Use the Layout component to wrap all pages */}
      <Layout>
        {/* TODO: Set up Routes for different pages */}
        <Routes>
          {/* TODO: Create route for Home page */}
          <Route path="/" element={<HomePage />} />
          
          {/* TODO: Create route for About page */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* TODO: Create route for Products page */}
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

// TODO: Export the App component
export default App;
