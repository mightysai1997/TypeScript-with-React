import React, { useState } from 'react';

const ReDoSExample: React.FC = () => {
  const [input, setInput] = useState('');

  const handleMatch = () => {
    const regex = /^(a+)+$/; // Vulnerable regex
    console.log(regex.test(input));
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleMatch}>Test Regex</button>
    </div>
  );
};

export default ReDoSExample;
