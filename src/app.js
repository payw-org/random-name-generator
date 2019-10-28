const express = require('express')
const app = express()

app.get('/new', (req,res)=>{
    res.send('The random_name')
    console.log(`${req.originalUrl} is requested`)
})



app.listen(3000, ()=>{
    console.log('now listening 3000 port')
})
