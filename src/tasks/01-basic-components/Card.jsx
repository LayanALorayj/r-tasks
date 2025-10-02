// TODO: Create a flexible Card component system
// This will include Card, CardHeader, CardBody, and CardFooter

import React from 'react';

// TODO: Create the main Card component
// It should wrap content and provide a container
const Card = ({ children, className = '', ...props }) => {
  // TODO: Combine default 'card' class with any additional classes
  const cardClasses = ['card', className].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

// TODO: Create CardHeader component
// This should be used for card titles and headers
const CardHeader = ({ children, className = '', ...props }) => {
  const headerClasses = ['card-header', className].filter(Boolean).join(' ');

  return (
    <div className={headerClasses} {...props}>
      {children}
    </div>
  );
};

// TODO: Create CardBody component
// This should be used for the main content of the card
const CardBody = ({ children, className = '', ...props }) => {
  const bodyClasses = ['card-body', className].filter(Boolean).join(' ');

  return (
    <div className={bodyClasses} {...props}>
      {children}
    </div>
  );
};

// TODO: Create CardFooter component
// This should be used for actions or additional info at the bottom
const CardFooter = ({ children, className = '', ...props }) => {
  const footerClasses = ['card-footer', className].filter(Boolean).join(' ');

  return (
    <div className={footerClasses} {...props}>
      {children}
    </div>
  );
};

// TODO: Export all card components so they can be used together
export { Card, CardHeader, CardBody, CardFooter };
