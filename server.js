const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Last run for today Good night - Commit Sat 20 Jul 22:58.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
