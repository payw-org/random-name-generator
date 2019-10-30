const express = require('express')
const router = express.Router()

const noun = require('./noun')
const adjective = require('./adjective')

router.use('/noun',noun)
router.use('/adjective',adjective)

router.get('/', (req, res)=>{
    res.send(req.originalUrl)
})

module.exports = router