import React from 'react';

const XSSExample: React.FC<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);
