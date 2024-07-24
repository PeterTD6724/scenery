const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("latest changes wit chat gpt changes and tag latest  / hm saved some time but not much. May be in big volume will be more noticable should run the changes- Commit Wednesday 24 July 18:36")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
