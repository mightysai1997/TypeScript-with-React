// src/components/ApiRequestComponent.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiRequestComponent: React.FC<{ query: string }> = ({ query }) => {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`https://api.example.com/search?query=${query}`) // Untrusted data in URL
      .then(res => setResponse(res.data))
      .catch(err => console.error('API request error:', err));
  }, [query]);

  return (
    <div>
      <h1>API Response</h1>
      <pre>{response}</pre>
    </div>
  );
};

export default ApiRequestComponent;
