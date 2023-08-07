import React, { useState,} from 'react';
import './App.css';
import WordList from './WordList';

import WordleRow from './Greens'; // Import the WordleRow component

function App() {
  const [guess, setGuess] = useState('');
  const [words, setWords] = useState([]);
  const handleGuessChange = async (newGuess) => {
    setGuess(newGuess);
    handleSubmit();
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://wordlesolver.onrender.com/api/?greens=${guess}&yellows[]=`);
      const data = await response.json();
      //console.log('API Response:', data);
      setWords(data);
      console.log(words)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <WordleRow onGuessChange={handleGuessChange} /> {/* Pass the handler as a prop */}
      <button onClick={handleSubmit}>Submit</button>
      <ul>
      {words.map((word) => (
        <li key={word}>{word}</li>
      ))}
    </ul>
    </div>
  );
}

export default App;
