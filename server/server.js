require('dotenv').config()
const express = require('express')
const app = express()
const dbConn = require('./config/db')
const Projects = require('./routes/projectRoute')
app.use(express.json())

// const dotenv = require('dotenv')
// dotenv.config()

const port = process.env.PORT || 7778
app.use('/projects', Projects)
app.get('/', (req, res) => {
    res.status(400).json("Welcome")
})

app.listen(port, () => {
    console.log(`Server running in : ${port}`)
})