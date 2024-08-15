import React from 'react';
import crypto from 'crypto';

const WeakAlgorithmExample: React.FC = () => {
  const hash = crypto.createHash('md5').update('data').digest('hex'); // Weak algorithm (MD5)

  return <div>Hash: {hash}</div>;
};

export default WeakAlgorithmExample;
