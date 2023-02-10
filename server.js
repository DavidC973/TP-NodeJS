const http = require('http');
const app = require('./app')

const server = http.createServer((req, res) => {
    readdirSync.end('Bonjour tout le monde !')
})

Server.listen(process.env.PORT || 3003);