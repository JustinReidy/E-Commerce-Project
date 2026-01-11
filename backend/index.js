require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieSession = require('cookie-session')

const app = express()
const port = 3000

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('Connected to Database.'))

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:4321',
    credentials: true
}))

app.use(express.json())

app.use(cookieSession({
    name: 'session',
    secret: process.env.SESSION_SECRET,
    maxAge: 7*24*60*60*1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
}))

// Routes
const authRouter = require('./routes/auth')
const itemsRouter = require('./routes/items')

app.use('/auth', authRouter)
app.use('/items', itemsRouter)


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})