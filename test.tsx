// src/components/SensitiveDataComponent.tsx
import React from 'react';

const SensitiveDataComponent: React.FC = () => {
  const apiKey = 'YOUR_SENSITIVE_API_KEY'; // Hardcoded sensitive information

  return (
    <div>
      <h1>API Key Exposure</h1>
      <p>API Key: {apiKey}</p>
    </div>
  );
};

export default SensitiveDataComponent;
