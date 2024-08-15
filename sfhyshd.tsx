import React, { useState } from 'react';
import axios from 'axios';

const SQLInjectionExample: React.FC = () => {
  const [username, setUsername] = useState('');

  const fetchUser = async () => {
    try {
      const result = await axios.get(`/users?username=${username}`);
      console.log(result.data);
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={fetchUser}>Fetch User</button>
    </div>
  );
};

export default SQLInjectionExample;
