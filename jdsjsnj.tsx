import React, { useState } from 'react';
import axios from 'axios';

const CodeInjectionExample: React.FC = () => {
  const [code, setCode] = useState('');

  const executeCode = async () => {
    try {
      const result = await axios.post('/execute', { code });
      console.log(result.data);
    } catch (err) {
      console.error('Error executing code:', err);
    }
  };

  return (
    <div>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={executeCode}>Execute Code</button>
    </div>
  );
};

export default CodeInjectionExample;
