import React, { useState } from 'react';

const UserProfile: React.FC = () => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleChange} />
      <p>Welcome, {userInput}</p> {/* Potential XSS vulnerability */}
    </div>
  );
};

export default UserProfile;
