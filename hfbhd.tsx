import React from 'react';
import axios from 'axios';

const CleartextTransmission: React.FC = () => {
  const sendData = async () => {
    await axios.post('http://example.com/api', { data: 'sensitive data' });
  };

  return <button onClick={sendData}>Send Data</button>;
};

export default CleartextTransmission;
