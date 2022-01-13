const express = require('express')

const router = express.Router()

router.get('/users', (req, res) => {
    res.send([
    { id: 1, user: "I am a user named JZ"},
    { id: 2, user: "I am a user named CB"},
    { id: 3, user: "I am a user named CJ"}
])
})

router.post('/register', async (req, res) => {
    await res.send({user: req.body})
})

router.post('/login', async (req, res) => {
    await req.body
    if (req.body.name.length > 1){
        res.send(req.body)
    } else {
        res.status(400).json({message: "error"})
    }
})

module.exports = router