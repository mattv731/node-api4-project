const server = require('./api/server')

const port = process.env.PORT || 5000 // heroku wants to set it's own port

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})