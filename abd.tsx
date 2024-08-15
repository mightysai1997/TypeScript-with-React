import React from 'react';
import axios from 'axios';

const CSRFExample: React.FC = () => {
  const sendRequest = async () => {
    await axios.post('/api/endpoint', { data: 'example' }); // CSRF vulnerability
  };

  return <button onClick={sendRequest}>Send Request</button>;
};

export default CSRFExample;
