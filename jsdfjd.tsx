import React from 'react';
import jwt from 'jsonwebtoken';

const InsecureJWTVerification: React.FC = () => {
  const token = jwt.sign({ data: 'test' }, 'secret', { algorithm: 'HS256' });

  // Insecure method: Use of 'none' algorithm which should be avoided
  const decoded = jwt.verify(token, 'secret', { algorithms: ['none'] }); // Insecure

  return <div>Decoded JWT: {JSON.stringify(decoded)}</div>;
};

export default InsecureJWTVerification;
