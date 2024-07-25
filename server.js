const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Goog morning Peter. What are the tasks for today? - Commit Wednesday 24 July 22:32")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
