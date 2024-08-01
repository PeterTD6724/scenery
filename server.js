const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("New test for the day all deleted - Commit Thursday 01 August 2024 16:21")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
