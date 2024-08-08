import React from 'react';

const API_KEY = 'YOUR_SECRET_API_KEY';

const DataFetcher: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch(`https://api.example.com/data?key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return <div>Fetching data...</div>;
};

export default DataFetcher;
