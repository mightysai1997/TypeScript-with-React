import React, { useState } from 'react';
import axios from 'axios';

const NoSQLInjectionExample: React.FC = () => {
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      const result = await axios.get(`/api/data?filter=${query}`);
      console.log(result.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default NoSQLInjectionExample;
