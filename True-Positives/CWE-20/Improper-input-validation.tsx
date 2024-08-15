import React, { useState } from 'react';
import axios from 'axios';

const FetchData: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://example.com/api/data'); // Potentially unsafe URL
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <div>{data}</div>
    </div>
  );
};

export default FetchData;
