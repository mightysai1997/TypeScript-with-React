import React, { useState } from 'react';

const SecretPage: React.FC = () => {
  const [secret, setSecret] = useState('SuperSecretPassword123'); // Sensitive data in state

  return (
    <div>
      <h1>Secret Information</h1>
      <p>{secret}</p> {/* Exposing sensitive data */}
    </div>
  );
};

export default SecretPage;
