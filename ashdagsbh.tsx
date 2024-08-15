import React, { useState } from 'react';

const ClearTextStorageExample: React.FC = () => {
  const [password, setPassword] = useState('secretPassword'); // Hardcoded sensitive data

  return <div>Password: {password}</div>;
};

export default ClearTextStorageExample;
