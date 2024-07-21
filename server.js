const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Brand new day started- Commit Sat 21 Jul 06:49.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
