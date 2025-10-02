// TODO: Create a Layout component that wraps all pages
// This component should include Header, main content, and Footer

import React from 'react';
import Header from './Header';
import Footer from './Footer';

// TODO: Create the Layout component
// It should accept children prop (the page content)
const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* TODO: Include the Header component */}
      <Header />
      
      {/* TODO: Create the main content area */}
      <main className="flex-grow-1">
        {children}
      </main>
      
      {/* TODO: Include the Footer component */}
      <Footer />
    </div>
  );
};

// TODO: Export the Layout component
export default Layout;
