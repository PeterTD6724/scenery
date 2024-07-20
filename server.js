const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Restarting before finish to see what will happen - Commit Sat 20 Jul 20:19.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
