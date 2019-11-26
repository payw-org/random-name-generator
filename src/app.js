const express = require('express')
const RNGenerator = require('./app/RNGenerator')
const app = express()
const router = require('./router')
const port = 3100
app.use('/', router)

app.listen(port, () => {
    console.log(`now listening ${port} port`)
})
