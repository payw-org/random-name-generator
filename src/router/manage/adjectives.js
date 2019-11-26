const express = require('express')
const CTRAdjectives = require('../../app/controller/CTRAdjectives')
const router = express.Router()

router.get('/all', CTRAdjectives.selectAll)
router.post('/insert', CTRAdjectives.insertByName)
router.delete('/delete', CTRAdjectives.deleteByName)
router.get('*', (req, res) => {
    res.send('Invalid request on manage/adjectives')
})

module.exports = router