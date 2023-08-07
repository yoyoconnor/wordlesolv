const fs = require('fs');

// Read the words from the file and split into an array
let wordstxt = fs.readFileSync('newwords.txt', 'utf8').split('\n');
//console.log(wordstxt);
function greenHandler(words, pos, letter) {
    letter = letter.toLowerCase();
    let newWords = words.filter(word => 
        {word = word.toLowerCase();
            return word.charAt(pos) === letter;
    
    });
    return newWords;
}
function blackHandler(words, letter) {
    letter = letter.toLowerCase(); 
    let newWords= words.filter(word=>
        {return !(word.includes(letter))});
    }
function yellowHandler(words, letter) {
    let newWords = words.filter(word => {
        word = word.toLowerCase();
        letter = letter.toLowerCase();
        if (word.includes(letter)) {
            return true;
        }
        return false;
    });
    return newWords;
}
function yellowHandlerWithPos(words, pos, letter) {
    let newWords = words.filter(word => {
        word = word.toLowerCase();
        letter = letter.toLowerCase();
        if (word.charAt(pos) === letter) {
            return false;
        }
        if (word.includes(letter)) {
            return true;
        }
        return false;
    });
    return newWords;
}
function solver(greenparam, yellowparam){
    let words = wordstxt;
    let greenletters = greenparam;
    let yellowletters = yellowparam;
    //greenletters filter
    for (let i = 0; i < greenletters.length; i++) {
        if(!(greenletters.charAt(i) === ' ')){
        words = greenHandler(words, i, greenletters.charAt(i));
    }
}
    for(let yel of yellowletters){
        if(yel.charAt(0) === '6'){
            words = yellowHandler(words, yel.charAt(1));
        }
        else{
            words = yellowHandlerWithPos(words, yel.charAt(0), yel.charAt(1));
    
        }
    }
return words;
}

module.exports =solver;