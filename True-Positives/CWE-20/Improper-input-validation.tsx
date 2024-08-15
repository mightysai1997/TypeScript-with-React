import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const hardcodedPassword = 'SuperSecretPassword123'; // Hardcoded password

  const handleLogin = () => {
    if (password === hardcodedPassword) {
      alert('Login successful!');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
