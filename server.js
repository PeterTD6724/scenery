const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Testing cloud run - Commit Thursday 25 July 20:23")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
