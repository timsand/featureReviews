const express = require('express');
const app = express();
const path = require('path')
const port = 8091;
const indexPATH = path.join(__dirname, '..', 'public', 'dist')
const db = require('/Users/tim/Desktop/featureReviews/db/index.js')


console.log(db)
app.use(express.json());


app.use(express.static(indexPATH))



app.get('/comments', (req, res) => {
  //will be used to fetch all comments
  db.fetchAllComments()
    .then((output) => {
      output = JSON.stringify(output);
      res.end(output);
    })
    .catch(() => {
      res.status(400).end()
    })
})





app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})