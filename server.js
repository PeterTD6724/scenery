const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('New test continuous deployment in Google Cloud Build wth CLOUD RUN AND Docker image in Artifact Registry')
})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
