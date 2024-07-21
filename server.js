const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Goooood niiight- Commit Sun 21 Jul 23:58.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
