import React from 'react';

const OpenRedirectExample: React.FC<{ redirectTo: string }> = ({ redirectTo }) => {
  window.location.href = redirectTo; // Open redirect vulnerability

  return <div>Redirecting...</div>;
};

export default OpenRedirectExample;
