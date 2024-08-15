import React, { useState } from 'react';
import axios from 'axios';

const TimingAttackExample: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);

  const sendRequest = async (input: string) => {
    const start = Date.now();
    try {
      await axios.post('/endpoint', { input });
    } finally {
      const duration = Date.now() - start;
      console.log('Request duration:', duration);
    }
  };

  return (
    <div>
      <button onClick={() => sendRequest('test')}>Send Request</button>
      {response && <pre>{response}</pre>}
    </div>
  );
};

export default TimingAttackExample;
