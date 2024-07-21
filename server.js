const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("starting github push- Commit Sun 21 Jul 18:09.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
