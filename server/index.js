const express = require('express');
const app = express();
const path = require('path')
const port = 8091;
const indexPATH = path.join(__dirname, '..', 'public', 'dist')
const db = require('/Users/tim/Desktop/featureReviews/db/index.js')



app.use(express.json());


app.use(express.static(indexPATH))


// app.get('/', (req, res)=>{
//   res.send('Gettings');
// })








app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})