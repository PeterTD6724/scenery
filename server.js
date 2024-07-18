const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Everything closed computer is in the sleep mode after the commit.')})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
