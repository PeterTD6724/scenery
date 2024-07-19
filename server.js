const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Start github project - commit Fri 19 Jul 18:10.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
