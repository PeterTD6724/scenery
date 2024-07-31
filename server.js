const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("some test changes. - Commit Wednesday 31 July 2024 12:02")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
