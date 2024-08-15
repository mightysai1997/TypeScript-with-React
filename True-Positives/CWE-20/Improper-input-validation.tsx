// src/components/UnsafeSQLComponent.tsx
import React, { useState } from 'react';
import axios from 'axios';

const UnsafeSQLComponent: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const executeQuery = () => {
    axios.get(`https://api.example.com/search?query=${query}`) // Unsafe query construction
      .then(response => setResult(response.data))
      .catch(error => console.error('Query error:', error));
  };

  return (
    <div>
      <h1>Unsafe SQL Injection</h1>
      <textarea value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={executeQuery}>Execute Query</button>
      <pre>{result}</pre>
    </div>
  );
};

export default UnsafeSQLComponent;
