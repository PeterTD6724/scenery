const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good morning Peter.Are we going to look at the port issue today? - Commit Saturday 26 July 10:31")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
