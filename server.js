const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good morning Peter.Brand new sunny day again. Lets go and see friends. - Commit Monday 29 July 10:06")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
