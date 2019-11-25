const express = require('express')
const router = express.Router()

const noun = require('./nouns')
const adjective = require('./adjectives')

router.use('/nouns', noun)
router.use('/adjectives', adjective)

router.get('/', (req, res) => {
    res.send(req.originalUrl)
})

module.exports = router