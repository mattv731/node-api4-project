const express = require('express')
const useRouter = require('./router')

const server = express();

server.use(express.json())

server.use('/api', useRouter)

server.get('/', (req, res) => {
    res.send(`<h1>Hello Everyone </h1>`)
})

module.exports = server