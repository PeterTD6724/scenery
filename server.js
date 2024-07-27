const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good night Peter - Commit Sunday 28 July 00:41")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
