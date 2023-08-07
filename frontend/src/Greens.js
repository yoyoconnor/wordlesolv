import React, { useState } from 'react';
import './WordleRow.css'; // Import your custom CSS file for styling

const WordleRow = ({ onGuessChange, enterEvent }) => {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(Array(5).fill(''));

  const handleGuessChange = (event) => {
    const newGuess = event.target.value.toUpperCase();
    setGuess(newGuess);
    onGuessChange(newGuess);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default Enter key behavior
      // You can add your own custom logic here if needed
      enterEvent();
    }
  };
function colors(param) {if(!(param==' '||param=='')){
    return 'G'
}
return 'B'
}

  return (
    <div className="wordle-row">
      <div className="wordle-feedback">
        {feedback.map((status, index) => (
          <span className={`feedback feedback-${colors(guess.charAt(index))}`}>{guess[index]}</span >
        ))}
      </div>
      <form>
        <input
          className="guess-input"
          type="text"
          maxLength="5"
          value={guess}
          onChange={handleGuessChange}
          placeholder="Enter all your Greens"
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
};

export default WordleRow;