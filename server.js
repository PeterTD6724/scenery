const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Goog night switching off the fridge.Next job.Deploying Django project on Google build and run it with Cloud run. - commit Fri 19 Jul 23:35.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
