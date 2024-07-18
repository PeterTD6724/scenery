const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("It is time to go to bed.Good night - commit 22:16.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
