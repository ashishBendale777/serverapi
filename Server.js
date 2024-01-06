const express = require('express')
const bodyparser = require('body-parser'
)
const server = new express()
server.use(bodyparser.json())


server.get('/', (req, res) => {
    res.send("Hi...")
})

server.get('/users', (req, res) => {
    const usrs = ["Ashish", "Sam", "Amol"]
    res.send(usrs)
})

server.post('/adduser', (req, res) => {
    const user = {
        UserName: req.body.UserName,
        UserPassword: req.body.UserPassword,
        UserEmail: req.body.UserEmail,
    }

    // {
    //     "UserName": "Ashish",
    //     "UserPassword": "asd",
    //     "UserEmail": "aashish@gmail.com",
    // }
    res.status(200).json(user)
})

server.listen(5000, () => {
    console.log("Server Started")
})
