const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.static(path.join(__dirname, 'public')))

// Routes
const mainRoutes = require('./routes/main')
const bookRoutes = require('./routes/books')
const userRoutes = require('./routes/users')

app.use('/', mainRoutes)
app.use('/', bookRoutes)
app.use('/', userRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})