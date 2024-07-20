const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("New change for test - Commit Sat 20 Jul 11:52.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
