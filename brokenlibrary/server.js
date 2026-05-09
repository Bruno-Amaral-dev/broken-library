const express = require('express')

console.log("Hello World")

const app = express()

app.listen(3000, () => {
    console.log("Server started on port 3000")
})