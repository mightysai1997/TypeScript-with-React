// Vulnerable component storing sensitive information in localStorage
import React from 'react';

const storeToken = (token: string) => {
  localStorage.setItem('authToken', token);
};

const TokenComponent: React.FC = () => {
  const token = localStorage.getItem('authToken');
  return <div>Your token is: {token}</div>; // Exposing sensitive data
};

export default TokenComponent;
