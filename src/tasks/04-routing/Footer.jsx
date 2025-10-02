// TODO: Create a Footer component
// This component should display footer information and links

import React from 'react';

// TODO: Create the Footer component
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* TODO: Create footer content */}
          <div className="col-md-6">
            <h5>My React App</h5>
            <p>A learning project for React development.</p>
          </div>
          
          <div className="col-md-6 text-md-end">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              {/* TODO: Add footer links */}
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
            </ul>
          </div>
        </div>
        
        {/* TODO: Add copyright information */}
        <hr className="my-3" />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 My React App. Learning project.</p>
        </div>
      </div>
    </footer>
  );
};

// TODO: Export the Footer component
export default Footer;
