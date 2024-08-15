// src/components/UnsafeIDORComponent.tsx
import React, { useState } from 'react';
import axios from 'axios';

const UnsafeIDORComponent: React.FC = () => {
  const [resourceId, setResourceId] = useState<string>('');
  const [data, setData] = useState<string | null>(null);

  const fetchResource = () => {
    // Directly using user input in the request URL
    axios.get(`/api/resource/${resourceId}`)
      .then(response => setData(response.data))
      .catch(error => console.error('Fetch error:', error));
  };

  return (
    <div>
      <h1>Insecure Direct Object Reference</h1>
      <input
        type="text"
        value={resourceId}
        onChange={e => setResourceId(e.target.value)}
      />
      <button onClick={fetchResource}>Fetch Resource</button>
      <pre>{data}</pre>
    </div>
  );
};

export default UnsafeIDORComponent;
