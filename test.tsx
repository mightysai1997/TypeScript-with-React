// src/App.tsx
import React from 'react';

interface GreetingProps {
  name?: string; // Optional prop without default value
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Potential problem: 'name' could be undefined
  return <div>Hello, {name.toUpperCase()}!</div>;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name={undefined} /> {/* Passing undefined explicitly */}
    </div>
  );
};

export default App;
