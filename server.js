const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("New revision set - Commit Mon 22Jul 17:24")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
