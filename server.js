const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Now we are deleting the repository gcr.io from Artifact registry - commit Fri 19 Jul 22:06.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
