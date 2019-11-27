const express = require('express');
const app = express();
const path = require('path')
const port = 8091;
const indexPATH = path.join(__dirname, '..', 'public', 'dist')


app.use(express.static(indexPATH))


// app.get('/', (req, res)=>{
//   res.send('Gettings');
// })








app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})