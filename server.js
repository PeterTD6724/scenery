const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Latest commit before stopping work for today - commit Fri 19 Jul 22:13.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
