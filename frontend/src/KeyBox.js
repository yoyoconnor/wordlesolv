import React, { useState } from 'react';

const KeyBox = (props) => {
  const [indice, setIndice] = useState(0);
  const colors = ['black', 'yellow', 'red'];
  const handleClick = () => {
    if(indice==0){setIndice(1)}
    else if(indice==1){setIndice(2)}
    else if(indice==2){setIndice(0)}
    console.log(props.letter);
    props.onClick(props.letter);
  };
  

  const boxStyle = {
    width: '60px',
    height: '60px',
    padding: '10px',
    color:'white',
    backgroundColor: colors[indice],
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={boxStyle} onClick={handleClick}>
      {props.letter}
    </div>
  );
};

export default KeyBox;
