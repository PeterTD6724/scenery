const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Cannot change the region to europe-west1 works only with us region')
})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
