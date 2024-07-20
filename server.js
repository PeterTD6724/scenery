const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Looks it require page restart to apply the changes - Commit Sat 20 Jul 20:36.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
