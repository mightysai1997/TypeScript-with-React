import React from 'react';

const LogMessage: React.FC<{ message: string }> = ({ message }) => {
  console.log(`Message: ${message}`); // Ensure message does not contain dangerous format specifiers
  return <div>{message}</div>;
};

export default LogMessage;
