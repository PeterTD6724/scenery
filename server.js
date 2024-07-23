const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Working of VM terminal instance connection - Commit Tuesday 23July 11:55")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
