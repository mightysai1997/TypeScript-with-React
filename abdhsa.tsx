import React, { useState } from 'react';

const WeakRandomValueExample: React.FC = () => {
  const [randomValue, setRandomValue] = useState(Math.random()); // Weak random generator

  return <div>Random Value: {randomValue}</div>;
};

export default WeakRandomValueExample;
