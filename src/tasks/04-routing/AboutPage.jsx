// TODO: Create an AboutPage component
// This page should provide information about the app and learning objectives

import React from 'react';

// TODO: Create the AboutPage component
const AboutPage = () => {
  return (
    <div className="container py-5">
      {/* TODO: Add a page title */}
      <div className="text-center mb-5">
        <h1 className="display-4">About This Project</h1>
        <p className="lead">A comprehensive React learning experience</p>
      </div>

      {/* TODO: Add information about the project */}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h3>Project Overview</h3>
            </div>
            <div className="card-body">
              <p>
                This is a beginner-friendly React project designed to teach fundamental concepts 
                through hands-on practice. The project is organized into learning tasks that 
                progressively build your understanding of React.
              </p>
            </div>
          </div>

          {/* TODO: Add learning objectives */}
          <div className="card mt-4">
            <div className="card-header">
              <h3>Learning Objectives</h3>
            </div>
            <div className="card-body">
              <h5>What you'll learn:</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>React Components:</strong> Creating reusable UI components
                </li>
                <li className="list-group-item">
                  <strong>State Management:</strong> Using useState and useEffect hooks
                </li>
                <li className="list-group-item">
                  <strong>API Integration:</strong> Fetching data from external APIs
                </li>
                <li className="list-group-item">
                  <strong>Routing:</strong> Creating multi-page applications
                </li>
                <li className="list-group-item">
                  <strong>Styling:</strong> CSS modules and responsive design
                </li>
              </ul>
            </div>
          </div>

          {/* TODO: Add technology stack */}
          <div className="card mt-4">
            <div className="card-header">
              <h3>Technology Stack</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Frontend:</h6>
                  <ul>
                    <li>React 18</li>
                    <li>React Router</li>
                    <li>Bootstrap 5</li>
                    <li>CSS Modules</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>APIs:</h6>
                  <ul>
                    <li>DummyJSON API</li>
                    <li>Fetch API</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* TODO: Add getting started information */}
          <div className="card mt-4">
            <div className="card-header">
              <h3>Getting Started</h3>
            </div>
            <div className="card-body">
              <p>To get the most out of this project:</p>
              <ol>
                <li>Read each task's README file</li>
                <li>Follow the TODO comments in the code</li>
                <li>Complete tasks in order</li>
                <li>Experiment with the code</li>
                <li>Ask questions when you get stuck!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO: Export the AboutPage component
export default AboutPage;
