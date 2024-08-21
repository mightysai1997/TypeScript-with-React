import React, { useState } from 'react';

const VulnerableComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [displayValue, setDisplayValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // The vulnerability: directly inserting user input into innerHTML
    setDisplayValue(inputValue);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {/* Potential XSS vulnerability here */}
        <div dangerouslySetInnerHTML={{ __html: displayValue }} />
      </div>
    </div>
  );
};

export default VulnerableComponent;
