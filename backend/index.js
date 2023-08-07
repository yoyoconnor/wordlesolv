const solver = require('./solver.js');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/api', (req, res) => {
    const { greens, yellows,reds } = req.query;
    console.log(greens);
    console.log(yellows);
    console.log(reds)
    res.send(solver(greens, yellows,reds));
});






//6 indicates that the letter is in the word, but not in the right place and we dont have any specified position
//0-4 indicates that the letter is in the word at the wrong position in the specified indicie
//yellow=['6O']
//solver('AL', yellow);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });