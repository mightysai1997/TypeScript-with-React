import React from 'react';

interface Props {
  username: string;
}

const MyComponent: React.FC<Props> = ({ username }) => {
  return (
    <div>
      <p>Welcome, {username}</p>
    </div>
  );
};
