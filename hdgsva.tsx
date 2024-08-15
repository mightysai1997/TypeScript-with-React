import React, { useState } from 'react';

const UncheckedLoop: React.FC = () => {
  const [count, setCount] = useState(1000);

  const handleLoop = () => {
    for (let i = 0; i < count; i++) {
      console.log(i); // Potentially large loop
    }
  };

  return (
    <div>
      <button onClick={handleLoop}>Run Loop</button>
    </div>
  );
};

export default UncheckedLoop;
