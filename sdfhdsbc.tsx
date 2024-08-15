import React from 'react';

const InfoExposureExample: React.FC<{ user: { name: string; email: string } }> = ({ user }) => (
  <div>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p> {/* Sensitive information */}
  </div>
);

export default InfoExposureExample;
