import React, { useState } from 'react';
import axios from 'axios';

const CommandSender: React.FC = () => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendCommand = async () => {
    try {
      const result = await axios.post('/execute-command', { command });
      setResponse(result.data);
    } catch (err) {
      setError('Command execution failed');
    }
  };

  return (
    <div>
      <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} />
      <button onClick={sendCommand}>Send Command</button>
      {error && <p>{error}</p>}
      {response && <pre>{response}</pre>}
    </div>
  );
};

export default CommandSender;
