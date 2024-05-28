import React, { useState } from 'react';
import Ball from './components/Ball';
import './App.css';

const initialNumbers = [5, 11, 16, 23, 32];

const generateRandomNumbers = () => {
  const numbers = new Set<number>();
  while (numbers.size < 5) {
    const num = Math.floor(Math.random() * 32) + 5;
    numbers.add(num);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);

  const handleNewNumbers = () => {
    setNumbers(generateRandomNumbers());
  };

  return (
    <div className="app">
      <button onClick={handleNewNumbers}>New numbers</button>
      <div className="numbers">
        {numbers.map((num) => (
          <Ball key={num} number={num} />
        ))}
      </div>
    </div>
  );
};

export default App;

