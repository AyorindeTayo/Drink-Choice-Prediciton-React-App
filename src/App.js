import React from 'react';
import DrinkChoiceForm from './DrinkChoiceForm';

const apiKey = process.env.REACT_APP_TOM_API_KEY;
const input = JSON.stringify({
  temperature: 75,
  price: 5.99
});

function App() {

  fetch(`https://api.up2tom.com/v3/models/drink-choice?apiKey=${apiKey}&input=${input}`)
  .then(response => response.json())
  .then(data => console.log(data));

  return (
    <div className="App">
      <DrinkChoiceForm />
    </div>
  );
}


export default App;
yti