require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('Connected to Database.'))

app.use(express.json())

const itemsRouter = require ('./routes/items')

app.use('/items', itemsRouter)


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})