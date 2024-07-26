const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good morning Peter.Are we going to resolve the issue with 8080 port in cloud build? - Commit Friday 26 July 08:19")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
