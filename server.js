const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good morning.The day has just began. - commit Fri 20 Jul 06:56.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
