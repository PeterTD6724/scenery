const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('And the last test for today for automatic restart from GitHub need to be only on one line 15:34')})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
