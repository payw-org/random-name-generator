const express = require('express')
const app = express()
const router = require('./router')
const CORS = require('cors')();
const port = 3100

app.use(CORS);
app.use('/', router)

app.listen(port, () => {
    console.log(`now listening ${port} port`)
})
