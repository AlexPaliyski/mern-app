const express = require('express')
const app = express()
const port = 3000
const { create_db } = require('./database/setup-db');

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log("Passed from here");
create_db();