const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Work finished going to rest now - commit Fri 19 Jul 15:59.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
