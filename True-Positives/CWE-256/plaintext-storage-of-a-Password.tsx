import React, { useState } from 'react';
import axios from 'axios';

const CommandSender: React.FC = () => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    // Basic input validation
    if (command.includes(';') || command.includes('&') || command.includes('|')) {
      setError('Invalid command characters');
      return;
    }

    try {
      const result = await axios.post('http://localhost:3000/run', { command });
      setResponse(result.data);
      setError(null);
    } catch (err) {
      console.error('Error sending command:', err);
      setError('Failed to execute command');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Enter command"
      />
      <button onClick={handleSubmit}>Send Command</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && <pre>{response}</pre>}
    </div>
  );
};

export default CommandSender;
