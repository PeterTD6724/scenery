const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Old run  1 min 26 sec latest - Commit Sat 20 Jul 22:33.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
