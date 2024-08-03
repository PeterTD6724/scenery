const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good morning Peter.We will get the project ready on ubuntu today - Commit Friday 03 August 2024 07:18")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
