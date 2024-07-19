const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Google closed the last run done image working perfect in europe-west1 region work stopped - commit Fri 19 Jul 23:25.")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
