const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser')
const CORS = require('cors')();
const port = 3100

app.use(CORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router)

app.listen(port, () => {
    console.log(`now listening ${port} port`)
})
