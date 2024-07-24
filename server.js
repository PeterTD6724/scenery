const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end(" the chat gpt code is rubbish does not transfer the changes.I will keep mine - Commit Wednesday 24 July 18:36")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
