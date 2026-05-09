const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'books.html'))
})

module.exports = router
