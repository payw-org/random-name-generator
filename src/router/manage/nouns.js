const express = require('express')
const CTRNouns = require('../../app/controller/CTRNouns')
const router = express.Router()

router.get('/all', CTRNouns.selectAll)

router.post('/insert', CTRNouns.insertByName)

router.delete('/delete', CTRNouns.deleteByName)

module.exports = router