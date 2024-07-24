const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Goog morning Peter. On what project we are going to work today? Let's move the ubuntu files to new VM - Commit Wednesday 24 July 09:31")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
