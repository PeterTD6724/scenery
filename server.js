const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Starting upload django project on ubuntu server - Commit Thursday 08 August 2024 21:07")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
