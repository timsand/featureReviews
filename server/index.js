const express = require('express');
const app = express();
const path = require('path')
const port = 8091;
const indexPATH = path.join(__dirname, '..', 'public', 'dist')
const db = require('../db/index.js')


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

app.patch('/comments', (req, res) => {
  let id = req.body.id;
  let itemName = req.body.itemName
  db.updateReviewCount(itemName, id)
  .then((data) => {
    res.end();
  })
  .catch((err) => {
    res.status(400).end();
  })
})





app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})