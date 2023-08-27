// Purpose: ranker function to rank words based on yellowArray
// Input: WordList

function ranker(WordList) {
    const wordListWithScores = [];
    for (const word of WordList) {
        const score = rankerHelper(word,WordList); // Calculate the score (implement your logic)
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


function rankerHelper(word,WordList)
{
    let score = 0;
    for(let i = 0; i < WordList.length; i++)
    {
        if (word.length === WordList[i].length)
        {
            let count = 0;
            for(let j = 0; j < word.length; j++)
            {
                if(word.charAt(j) === WordList[i].charAt(j))
                {
                    count++;
                }
            }
                score+=count*count;
    
        }
    }
    return score;
}
module.exports = ranker;