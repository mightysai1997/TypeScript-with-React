import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      // Exposing error stack trace
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return <div>Data: {data}</div>;
};

export default MyComponent;
