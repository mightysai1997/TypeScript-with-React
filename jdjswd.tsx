import React from 'react';
import jwt from 'jsonwebtoken';

const JWTExample: React.FC = () => {
  const token = jwt.sign({ data: 'test' }, 'secret', { algorithm: 'none' }); // Insecure 'none' algorithm

  return <div>JWT Token: {token}</div>;
};

export default JWTExample;
