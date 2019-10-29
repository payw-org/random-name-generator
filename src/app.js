const express = require('express')
const RNGenerator = require('./app/RNGenerator')
const app = express()

app.get('/new', (req,res)=>{
    const random_name = RNGenerator.getRandomName()
    res.send(random_name)
    console.log(`${req.originalUrl} is requested`)
})



app.listen(3000, ()=>{
    console.log('now listening 3000 port')
})
