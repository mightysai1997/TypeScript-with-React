// src/components/UnsafeAuthComponent.tsx
import React, { useState } from 'react';
import axios from 'axios';

const UnsafeAuthComponent: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = () => {
    axios.post('/api/login', { username, password })
      .then(response => {
        localStorage.setItem('authToken', response.data.token); // Storing token insecurely
      })
      .catch(error => console.error('Login error:', error));
  };

  return (
    <div>
      <h1>Broken Authentication</h1>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default UnsafeAuthComponent;
