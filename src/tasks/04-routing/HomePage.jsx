// TODO: Create a HomePage component
// This page should showcase the basic components and state management

import React from 'react';
import Counter from '../02-state-management/Counter';
import ToggleText from '../02-state-management/ToggleText';

// TODO: Create the HomePage component
const HomePage = () => {
  return (
    <div className="container py-5">
      {/* TODO: Add a welcome section */}
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to My React App!</h1>
        <p className="lead">This is a learning project to understand React fundamentals.</p>
      </div>

      {/* TODO: Add a section for the Counter component */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Counter Component</h3>
            </div>
            <div className="card-body">
              <Counter />
            </div>
          </div>
        </div>

        {/* TODO: Add a section for the ToggleText component */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Toggle Component</h3>
            </div>
            <div className="card-body">
              <ToggleText />
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Add information about the project */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3>About This Project</h3>
            </div>
            <div className="card-body">
              <p>This project demonstrates:</p>
              <ul>
                <li>React Components</li>
                <li>State Management with Hooks</li>
                <li>API Integration</li>
                <li>Page Routing</li>
                <li>Responsive Design</li>
              </ul>
              <p>Navigate to different pages using the menu above to see more features!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO: Export the HomePage component
export default HomePage;
