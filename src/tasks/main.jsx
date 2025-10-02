// TODO: Create the main entry point for the React application
// This file should render the App component to the DOM

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// TODO: Get the root element from the HTML
const container = document.getElementById('root');

// TODO: Create a React root
const root = createRoot(container);

// TODO: Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
