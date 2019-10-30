const express = require('express')
const router = express.Router()

router.get('/all',(req, res)=>{
    res.send(req.originalUrl)
})

router.post('/add/*',(req, res)=>{
    res.send(req.originalUrl)
})

router.get('/sub/*',(req, res)=>{
    res.send(req.originalUrl)
})

module.exports = router