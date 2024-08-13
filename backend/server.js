// eslint-disable-next-line no-undef
const express = require('express')
// eslint-disable-next-line no-undef
const cors = require('cors');
// eslint-disable-next-line no-undef
const dataInfo = require("./data.json")
const app = express()
const port = 3000
app.use(cors()); 


const bigBox = dataInfo


app.get('/api/data', (req, res) => {
  res.json(bigBox)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})