import React from 'react';
import jwt from 'jsonwebtoken';

const JWTVerificationDisabled: React.FC = () => {
  const token = jwt.sign({ data: 'test' }, 'secret', { algorithm: 'HS256' });

  // No signature verification is performed here
  const decoded = jwt.decode(token); // Insecure: Decoding without verification

  return <div>Decoded JWT: {JSON.stringify(decoded)}</div>;
};

export default JWTVerificationDisabled;
