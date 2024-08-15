import React from 'react';

const FormatStringExample: React.FC<{ userInput: string }> = ({ userInput }) => {
  console.log(`User input: ${userInput}`); // Potential format string vulnerability
  return <div>User input: {userInput}</div>;
};

export default FormatStringExample;
