// src/components/DeserializeComponent.tsx
import React from 'react';

const DeserializeComponent: React.FC<{ serializedData: string }> = ({ serializedData }) => {
  const data = JSON.parse(serializedData); // Insecure deserialization
  return (
    <div>
      <h1>Deserialized Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DeserializeComponent;
