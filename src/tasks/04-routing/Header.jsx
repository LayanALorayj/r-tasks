// TODO: Create a Header component with navigation
// This component should include navigation links to different pages

import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Create the Header component
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* TODO: Create a brand/logo link that goes to home page */}
        <Link className="navbar-brand" to="/">
          <strong>My React App</strong>
        </Link>

        {/* TODO: Create a button for mobile menu toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* TODO: Create the navigation menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* TODO: Create navigation links for each page */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// TODO: Export the Header component
export default Header;
