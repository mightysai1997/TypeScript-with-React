import React, { useState } from 'react';

const BufferOverreadExample: React.FC = () => {
  const [data, setData] = useState<Uint8Array>(new Uint8Array([1, 2, 3]));

  const handleRead = () => {
    // Unsafe reading beyond buffer size
    const buffer = new Uint8Array(data.buffer, 0, 10); // Over-read
    console.log(buffer);
  };

  return (
    <div>
      <button onClick={handleRead}>Read Buffer</button>
    </div>
  );
};

export default BufferOverreadExample;
