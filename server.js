const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Task for the afternoon - clud run on VS code terminal - Commit Mon 22Jul 06:49.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
