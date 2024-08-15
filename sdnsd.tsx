import React, { useState } from 'react';
import axios from 'axios';

const TimingAttackExample: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);

  const sendRequest = async () => {
    const start = Date.now();
    try {
      const result = await axios.post('/api/check', { data: 'test' });
      setResponse(result.data);
    } finally {
      const duration = Date.now() - start;
      console.log('Request duration:', duration); // Timing information
    }
  };

  return (
    <div>
      <button onClick={sendRequest}>Send Request</button>
      {response && <pre>{response}</pre>}
    </div>
  );
};

export default TimingAttackExample;
