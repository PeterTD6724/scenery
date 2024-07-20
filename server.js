const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Start working on Django deployment - Commit Sat 20 Jul 18:28.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
