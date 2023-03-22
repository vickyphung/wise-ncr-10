const express = require('express')
const fruits = require('./models/fruits')

const app = express();
const port = 3000;



app.get('/fruits', (req, res)=>{
    res.send(fruits)
})


app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray])
})

app.listen(port, () =>{
    console.log('Listening on port ' + port)
})