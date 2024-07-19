const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Finally manage to switch to europe-west1 region image - commit Fri 19 Jul 18:10.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
