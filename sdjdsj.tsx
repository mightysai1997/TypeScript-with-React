import React from 'react';
import jwt from 'jsonwebtoken';

const JWTExample: React.FC = () => {
  const token = jwt.sign({ data: 'test' }, 'secret', { algorithm: 'HS256' });
  
  // No signature verification is performed
  const decoded = jwt.decode(token); // Insecure: decoding without verification

  return <div>Decoded JWT: {JSON.stringify(decoded)}</div>;
};

export default JWTExample;
