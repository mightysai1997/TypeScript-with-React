import React from 'react';
import axios from 'axios';

const CleartextTransmissionExample: React.FC = () => {
  const sendData = async () => {
    await axios.post('http://example.com/api/data', { data: 'sensitive data' }); // HTTP instead of HTTPS
  };

  return <button onClick={sendData}>Send Data</button>;
};

export default CleartextTransmissionExample;
