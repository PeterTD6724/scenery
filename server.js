const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Change the settings to see how cloud run will work as ssh has problems running linux - Commit Mon 22Jul 21:28")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
