const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Now caching the yaml file for fast cloud build - Commit Wednesday 24 July 09:31")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
