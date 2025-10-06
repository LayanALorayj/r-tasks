import React from 'react';
import  VisibleContent  from '../components/ui/ToggleText'; 

const AboutPage = () => {
  return (
    <VisibleContent initialText="Show About" hiddenText="Hide About"> 
      <h1>About Page</h1>
    </VisibleContent>
  );
};

export default AboutPage;