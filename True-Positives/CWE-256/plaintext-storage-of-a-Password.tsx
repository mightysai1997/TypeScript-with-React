import React from 'react';

const apiKey: string = 'YOUR_SECRET_API_KEY';

const MyComponent: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch(`https://api.example.com/data?key=${apiKey}`);
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return <div>Data fetching component</div>;
};

export default MyComponent;
