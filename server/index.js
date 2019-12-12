const express = require('express');
const app = express();
const path = require('path')
const port = 8091;
const indexPATH = path.join(__dirname, '..', 'public', 'dist')
const db = require('../db/index.js')
let bundleFile = path.join(__dirname, '..', 'public', 'dist', 'bundle.js');
let cssFile = path.join(__dirname, '..', 'public', 'dist', 'style.css');
const cors = require('cors');

app.use(cors());



app.use(express.json());


app.use(express.static(indexPATH))

app.use('/bundle.js', express.static(bundleFile))
app.get('/stylesheet', (req, res) => {
  res.sendFile(cssFile)
})

app.get('/comments', (req, res) => {
  db.fetchAllComments()
    .then((output) => {
      output = JSON.stringify(output);
      res.end(output);
    })
    .catch(() => {
      res.status(400).end()
    })
})

app.get('/comments/:id', (req, res) => {
  db.fetchSpecificComment(req.params.id)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(400).end();
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