import React, { useState } from 'react';

const KeyBox = (props) => {
  const [indice, setIndice] = useState(0);
  const colors = ['black', 'yellow', 'red'];
  const textColors = ['white', 'black', 'black'];
  const handleClick = () => {
    if(indice==0){setIndice(1)}
    else if(indice==1){setIndice(2)}
    else if(indice==2){setIndice(0)}
    console.log(props.letter);
    props.onClick(props.letter);
  };
  

  const boxStyle = {
    fontSize: '20px',
    width: '50px',
    height: '50px',
    padding: '10px',
    color: textColors[indice],
    backgroundColor: colors[indice],
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={boxStyle} onClick={handleClick}>
      {props.letter.toUpperCase()}
    </div>
  );
};

export default KeyBox;
