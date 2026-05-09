const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'))
})

app.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'books.html'))
})

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'users.html'))
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})