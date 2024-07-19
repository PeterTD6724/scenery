const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Checking today's updates.Global IT outage - commit Fri 19 Jul 14:14.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
