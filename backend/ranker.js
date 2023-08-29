// Purpose: ranker function to rank words based on yellowArray
// Input: WordList

function ranker(WordList, greens) {
    numgreens=greencalculator(greens);
    const wordListWithScores = [];
    for (const word of WordList) {
        const score = rankerHelper(word,WordList,numgreens); // Calculate the score (implement your logic)
        wordListWithScores.push({ word, score });
      }
wordListWithScores.sort((a, b) => b.score - a.score);
wordListWithScores.map((object) => {
    console.log(object.word, object.score);
});
const sortedList= wordListWithScores.map((object) => object.word);
console.log(sortedList);
return sortedList
}

greencalculator=(greens)=>{
    let numgreens=0;
    for(let i=0;i<greens.length;i++){
        if(greens.charAt(i)!=' '){
            numgreens++;
        }
    }
    return numgreens;
}
function rankerHelper(word,WordList,numgreens)
{
    let score = 0;
    for(let i = 0; i < WordList.length; i++)
    {
        if (word.length === WordList[i].length)
        {
            let gcount = -1*numgreens;

            for(let j = 0; j < word.length; j++)
            {
                if(word.charAt(j) === WordList[i].charAt(j))
                {
                    gcount++;
                }
                else if(WordList[i].includes(word.charAt(j)))
                {
                    score+=1;
                }

            }
                score=gcount*gcount;
    
        }
    }
    return score;
}
module.exports = ranker;