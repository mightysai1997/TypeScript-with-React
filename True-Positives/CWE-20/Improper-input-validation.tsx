// src/components/VulnerableAxiosComponent.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Known vulnerable version

const VulnerableAxiosComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://api.example.com/data') // Example endpoint
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Vulnerable Axios Component</h1>
      <p>Data: {data}</p>
    </div>
  );
};

export default VulnerableAxiosComponent;
