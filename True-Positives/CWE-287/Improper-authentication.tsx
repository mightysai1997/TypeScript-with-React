// Insecure authentication implementation
import React, { useState } from 'react';

const authenticateUser = (username: string, password: string): boolean => {
  return username === 'admin' && password === 'password123'; // Hardcoded credentials
};

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (authenticateUser(username, password)) {
      alert('Authenticated!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default LoginForm;
