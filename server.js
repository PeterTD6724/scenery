const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("added variabe to the trigger the host name for the Artifact repository - commit Fri 19 Jul 22:13.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
