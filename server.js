const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good morning Peter have a nice day - Commit Tuesday 23July 07:30")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
