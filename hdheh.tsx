import React from 'react';

const UserProfile: React.FC<{ user: { name: string; email: string } }> = ({ user }) => (
  <div>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p> {/* Email is sensitive */}
  </div>
);

export default UserProfile;
