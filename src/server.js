const express = require('express')
const path = require('path')
const app = express()
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const mysql = require('mysql2')
const connection = require('./config/database.js')
require('dotenv').config()

const hostname = process.env.HOST_NAME
const port = process.env.PORT

console.log(process.env.PORT);
//config template engine
configViewEngine(app);

app.use('/test', webRouter)
// app.use('/', webRouter)

app.use('/', webRouter)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})