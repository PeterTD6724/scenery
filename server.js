const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Good morning Peter.Brand new sunny day.What is the task for today.Solving port 8080 problem? - Commit Sunday 28 July 11:37")})
const PORT = process.env.PORT || 8080
server.listen(PORT,() => console.log('Listening'))
