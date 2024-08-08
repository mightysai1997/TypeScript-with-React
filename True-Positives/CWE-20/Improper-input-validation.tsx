import React, { useState } from 'react';

const UserForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    console.log('Submitted email:', email); // No validation or sanitization
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserForm;
