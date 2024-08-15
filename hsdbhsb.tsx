import React, { useState } from 'react';

const RandomNumberGenerator: React.FC = () => {
  const [randomValue, setRandomValue] = useState(Math.random());

  return <div>Random Value: {randomValue}</div>;
};

export default RandomNumberGenerator;
