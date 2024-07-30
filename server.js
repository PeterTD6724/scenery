const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good morning Peter.Brand new sunny day again. Tacklle the port 8080 problem?. - Commit Tuesday 20 July 2024 11:04")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
