
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const root = require('path').join(__dirname, '../client', 'dist')
app.use(express.static(root))

app.get('/', (req, res)=>{
    res.sendFile('index.html', { root })
})

app.get('/message', (req, res)=>{
    res.send("Server is operational")
})

app.listen(port, ()=>{
console.log(`Server is running on port ${port}`)
})

