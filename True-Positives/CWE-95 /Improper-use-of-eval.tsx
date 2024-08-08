import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>('');

  const handleCalculate = () => {
    // Evaluates the expression, which can be dangerous
    const result = eval(expression);
    alert(`Result: ${result}`);
  };

  return (
    <div>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};

export default Calculator;
