import React, { useState } from 'react';

const SensitiveDataComponent: React.FC = () => {
  const [sensitiveData, setSensitiveData] = useState('MySecretPassword');

  return (
    <div>
      <p>Sensitive Data: {sensitiveData}</p>
    </div>
  );
};

export default SensitiveDataComponent;
