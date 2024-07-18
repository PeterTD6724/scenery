const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Summary of the project.Deploy Docker image in Google Cloud Build with continuous deployment run by Cloud Run.The image is stored in Artifact registry.There is no need of use of Google VM instance to run the project in the browser.')})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
