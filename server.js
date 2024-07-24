const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Another test of the yaml file - Commit Wednesday 24 July 20:15")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
