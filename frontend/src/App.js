import React, { useState,} from 'react';
import './App.css';
import WordList from './WordList';
import KeyBox from './KeyBox';
import Keyboard from './Keyboard';

import WordleRow from './Greens'; // Import the WordleRow component

function App() {
  const [guess, setGuess] = useState('');
  const [words, setWords] = useState([]);
  const [keyMap, setKeyMap] = useState(new Map());
  const [yellowArray, setYellowArray] = useState([]);
  const handleGuessChange = async (newGuess) => {
    setGuess(newGuess);
  };

  const handleSubmit = async () => {
    try {
      // Format the yellowArray as a comma-separated string
      const yellowParam = yellowArray.join('&yellows[]=');
      console.log(`https://wordlesolver.onrender.com/api/?greens=${guess}&yellows[]=${yellowParam}`);
      const response = await fetch(`https://wordlesolver.onrender.com/api/?greens=${guess}&yellows[]=${yellowParam}`);
      const data = await response.json();
      
      setWords(data);
      console.log(words);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const clearYellowArray = () => {
    setYellowArray([]);
  }

  const handleKeyMap = (map) => {
    setKeyMap(map);
    clearYellowArray();
    const updatedYellowArray = [];
    map.forEach((value, key) => {
      if (value === 1) {
        updatedYellowArray.push(`6${key}`);
      }
    });
    setYellowArray(updatedYellowArray);
    console.log(updatedYellowArray);
  };
  

  return (
      <div className="App">
        <WordleRow onGuessChange={handleGuessChange} />
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <Keyboard onMapChange={handleKeyMap} />
        <div className="word-list-container">
        <span style={{padding: 0 }}>
          {words.map((word) => (
            <h2 style={{ margin: '0 10px', fontSize: '1.5rem' }}>{word} </h2>
          ))}
        </span>
        </div>
      </div>
  );
}
export default App;
