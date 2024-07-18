const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Going to take my clotes from the clotes hanger - commit 20:26.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
