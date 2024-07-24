const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Now latest modifications with caching for run time save - Commit Wednesday 24 July 09:31")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
