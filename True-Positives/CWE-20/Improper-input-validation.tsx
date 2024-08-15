// src/components/UnsafeCommandInjectionComponent.tsx
import React, { useState } from 'react';

const UnsafeCommandInjectionComponent: React.FC = () => {
  const [command, setCommand] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const executeCommand = () => {
    // Dangerous direct execution
    fetch(`/api/execute?command=${encodeURIComponent(command)}`)
      .then(response => response.text())
      .then(output => setResult(output))
      .catch(error => console.error('Command error:', error));
  };

  return (
    <div>
      <h1>Unsafe Command Injection</h1>
      <textarea value={command} onChange={e => setCommand(e.target.value)} />
      <button onClick={executeCommand}>Execute Command</button>
      <pre>{result}</pre>
    </div>
  );
};

export default UnsafeCommandInjectionComponent;
