import React, { useState } from 'react';
import axios from 'axios';

const VulnerableApiCall: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<string | null>(null);

  const handleFetchData = async () => {
    try {
      // Dangerous: Directly including user input in the API request URL
      const response = await axios.get(`https://api.example.com/data?query=${input}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={handleFetchData}>Fetch Data</button>
      <div>
        {data && <p>Data: {data}</p>}
      </div>
    </div>
  );
};

export default VulnerableApiCall;
