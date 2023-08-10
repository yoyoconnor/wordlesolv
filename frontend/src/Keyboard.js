import KeyBox from "./KeyBox";
import React, { useState } from 'react';
import './Keyboard.css';

const Keyboard=({onMapChange})=>{
    let map1 = new Map();
    const alphabet='qwertyuiopasdfghjklzxcvbnm'
    const [keyMap, setKeyMap] = useState(map1);
    
    for(let i=0; i<26; i++){
        map1.set(alphabet.charAt(i,i+1), 0);
    }

    const handleClick = (letter) => {
        let map2 = new Map(keyMap);
        map2.set(letter, (map2.get(letter)+1)%3);
        setKeyMap(map2);
        if (onMapChange){
            onMapChange(map2);}
    }
    return (
        <>
         <div className="keyboard-container">
                {alphabet.split('').map((letter) => {
                    if (letter === 'q' || letter === 'a' || letter === 'z') {
                        return (<>
                        <div key={letter} className="keyboard-break"></div> 
                        <KeyBox key={letter} letter={letter} color={keyMap.get(letter)} onClick={handleClick} />
                        </>);
                    }
                    return <KeyBox key={letter} letter={letter} color={keyMap.get(letter)} onClick={handleClick} />;
                })}
            </div>
        </>
    );
    
}
export default Keyboard;