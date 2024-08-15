// src/components/XSSComponent.tsx
import React from 'react';

const XSSComponent: React.FC<{ userInput: string }> = ({ userInput }) => {
  return (
    <div>
      <h1>Dangerous Content</h1>
      <p dangerouslySetInnerHTML={{ __html: userInput }} /> {/* XSS Vulnerability */}
    </div>
  );
};

export default XSSComponent;
