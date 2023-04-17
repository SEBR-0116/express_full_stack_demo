const express = require("express");
const cors = require('cors')
const logger = require('morgan')
const PORT = 3001;
const catController = require('./CatController')
const dogController = require('./dogController')
const app = express();

app.use(cors())
app.use(express.json())


app.listen(PORT, ()=> {
  console.log('working')
})

app.get('/', (req, res)=>
{
  res.send('welcome')
})


app.get('/cats', catController.getCats)
app.get('/cats/:id', catController.getCat)
app.get('/dogs', dogController.getDogs)
app.get('/dogs/:id', dogController.getDog)
