import React from 'react';

const TypeValidationExample: React.FC<{ data: any }> = ({ data }) => {
  if (typeof data !== 'string') {
    throw new Error('Invalid type');
  }

  return <div>{data}</div>;
};

export default TypeValidationExample;
