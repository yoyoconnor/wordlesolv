import React, { useState,} from 'react';
import './App.css';
import WordList from './WordList';
import KeyBox from './KeyBox';
import Keyboard from './Keyboard';


import WordleRow from './Greens'; // Import the WordleRow component

function App() {
  const [guess, setGuess] = useState('');
  const [words, setWords] = useState(['hi']);
  const [keyMap, setKeyMap] = useState(new Map());
  const [yellowArray, setYellowArray] = useState([]);
  const [redArray, setRedArray] = useState([]);
  const handleGuessChange = async (newGuess) => {
    setGuess(newGuess);
  };

  const handleSubmit = async () => {
    try {
      setWords([]);
      // Format the yellowArray as a comma-separated string
      const yellowParam = yellowArray.join('&yellows[]=');
      const redparam = redArray.join('&reds[]=');
      console.log(`https://wordlesolver.onrender.com/api/?greens=${guess}&yellows[]=${yellowParam}&reds=${redparam}`);
      const response = await fetch(`https://wordlesolver.onrender.com/api/?greens=${guess}&yellows[]=${yellowParam}&reds=${redparam}`);
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
    const updatedRedArray = [];
    map.forEach((value, key) => {
      if (value === 1) {
        updatedYellowArray.push(`6${key}`);
      }
      if (value === 2) {
        updatedRedArray.push(`${key}`);
      }
    });
    setYellowArray(updatedYellowArray);
    setRedArray(updatedRedArray);
  };
  

  return (
      <div className="App">
        <WordleRow onGuessChange={handleGuessChange} enterEvent={handleSubmit}/>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <div className="centered-content">
        <Keyboard onMapChange={handleKeyMap} />
        <div className="word-list-container">
        <span style={{padding: 0 }}>
          {words.map((word) => (
            <h2 style={{ margin: '0 10px', fontSize: '1.5rem' }}>{word} </h2>
          ))}
        </span>
        </div>
        </div>
      </div>
  );
}
export default App;
