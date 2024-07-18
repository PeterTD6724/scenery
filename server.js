const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('New test for automatic restart need to be only on one line 15:34')})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
