const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good afternoon Peter - Commit Friday 02 August 2024 16:53")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
