import React, { useState } from 'react';
import DrinkChoiceForm from './DrinkChoiceForm';

function App() {
  const [drinkChoices, setDrinkChoices] = useState([]);

  function handleSaveResult(result, input) {
    const newDrinkChoice = {
      result,
      input,
      timestamp: new Date().toISOString()
    };
    setDrinkChoices([...drinkChoices, newDrinkChoice]);
    localStorage.setItem('drinkChoices', JSON.stringify([...drinkChoices, newDrinkChoice]));
  }

  return (
    <div>
      <DrinkChoiceForm onSaveResult={handleSaveResult} />
      <h2>Recent Drink Choices:</h2>
      <ul>
        {drinkChoices.map((drinkChoice, index) => (
          <li key={index}>
            <div>Result: {drinkChoice.result}</div>
            <div>Input: {JSON.stringify(drinkChoice.input)}</div>
            <div>Timestamp: {drinkChoice.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
