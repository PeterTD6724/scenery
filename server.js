const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Starting on uploading django project to Google Cloud Run? - Commit Thursday 25 July 11:43")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
