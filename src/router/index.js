const express = require('express')
const router = express.Router()
const RNGenerator = require('../app/RNGenerator')

const manage = require('./manage')


router.use('/manage', manage)
router.get('/new', async (req, res) => {
    const random_name = await RNGenerator.getRandomName()
    res.send(random_name)
    console.log(`${req.originalUrl} is requested`)
})
router.get('*', (req, res) => {
    res.send('Invalid request')
})

module.exports = router