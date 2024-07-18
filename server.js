const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Another change when everything is closed - commit 18:05.')})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
